import { router, procedure } from "../router";

export const appRouter = router({
  // hello: helloRouter,
  hello: procedure.query(({ input }) => {
    console.log(input);

    return "Hello from world!";
  }),
});

export type AppRouter = typeof appRouter;
