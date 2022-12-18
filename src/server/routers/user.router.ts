import { baseRouter, publicProcedure } from "../router";

export const userRouter = baseRouter({
  list: publicProcedure.query(() => []),
});
