import { router, procedure } from "../router";

export const productRouter = router({
  id: procedure.query(() => {
    return "An ID of a product!";
  }),
});
