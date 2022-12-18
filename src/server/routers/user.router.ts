import { baseRouter, publicProcedure } from "../router";
import { createUserSchema } from "~/schema/user.schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";

export const userRouter = baseRouter({
  list: publicProcedure.query(() => []),
  create: publicProcedure
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
});
