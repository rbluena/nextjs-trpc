import { router } from "../router";
import { userRouter } from "./user.router";

export const appRouter = router({
  users: userRouter,
});

export type AppRouter = typeof appRouter;
