import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { sendLoginEmail } from "~/lib/mailer";
import {
  createUserSchema,
  loginUserOTPSchema,
  verifyTokenSchema,
} from "~/schema/user.schema";
import generateHashToken from "~/utils/token";
import { baseRouter, publicProcedure } from "../router";

export const userRouter = baseRouter({
  register: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ input, ctx: { prisma } }) => {
      try {
        const createdUser = prisma.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });

        return createdUser;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "User is already exists!",
            });
          }
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong on our side, please try again later!",
        });
      }
    }),
  login: publicProcedure
    .input(loginUserOTPSchema)
    .mutation(async ({ input, ctx: { prisma } }) => {
      try {
        const { email, redirect } = input;

        const user = await prisma.user.findFirstOrThrow({
          where: {
            email,
          },
        });

        // Generating verification token
        const generatedToken = await generateHashToken();

        const loginToken = await prisma.loginToken.create({
          data: {
            redirect,
            id: generatedToken,
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });

        sendLoginEmail({
          email: user.email,
          name: user.name,
          token: loginToken.id,
        });
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          throw new TRPCError({
            code: "CONFLICT",
            message: error.message,
          });
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong on our side, please try again later!",
        });
      }
    }),
  verifyToken: publicProcedure
    .input(verifyTokenSchema)
    .query(async ({ input, ctx: { prisma } }) => {
      try {
        const verified = await prisma.loginToken.findFirst({
          where: {
            id: input.token,
          },
        });

        if (!verified) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Invalid token!",
          });
        }
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          throw new TRPCError({
            code: "CONFLICT",
            message: error.message,
          });
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong on our side, please try again later!",
        });
      }
    }),
});
