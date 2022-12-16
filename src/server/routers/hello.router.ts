import { procedure, router } from "../router";

export const helloRouter = router({
  hello: procedure.query(({ ctx }) => {
    return "Hello world!";
  }),
});
