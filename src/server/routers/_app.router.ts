import { baseRouter, publicProcedure } from "../router";
import { userRouter } from "./user.router";
import { productRouter } from "./product.router";

export const appRouter = baseRouter({
  healthcheck: publicProcedure.query(() => "It works perfectly!"),
  user: userRouter,
  product: productRouter,
});

export type AppRouter = typeof appRouter;
