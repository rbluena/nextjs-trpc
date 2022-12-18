import { baseRouter, publicProcedure } from "../router";

export const productRouter = baseRouter({
  all: publicProcedure.query(() => {
    return "An ID of a product!";
  }),
});
