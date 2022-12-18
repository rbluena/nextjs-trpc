import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { ServerContext } from "./createServerContext";

const t = initTRPC.context<ServerContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

// Base router and procedure helpers
export const baseRouter = t.router;

export const publicProcedure = t.procedure;

export const middleware = t.middleware;

export const mergeRouters = t.mergeRouters;
