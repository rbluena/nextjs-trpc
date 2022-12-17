import { router, procedure } from "../router";

export const userRouter = router({
  all: procedure.query(() => {
    return [];
  }),
});
