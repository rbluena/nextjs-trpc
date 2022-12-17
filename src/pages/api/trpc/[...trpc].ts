import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "~/server/routers/_app.router";
import { createServerContext } from "~/server/createServerContext";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createServerContext,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.log(`Something went wrong on  our side, we are working on it!`);
    }
  },
});
