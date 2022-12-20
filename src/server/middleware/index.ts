import { TRPCError } from "@trpc/server";
import { middleware } from "../router";

export const isAuthenticatedMiddleware = middleware(async ({ ctx, next }) => {
  const { user } = ctx;

  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Authenticated user is not authorized for this request!",
    });
  }

  return next();
});
