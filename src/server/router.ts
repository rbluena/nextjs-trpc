import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { ServerContext } from "./createServerContext";

const t = initTRPC.context<ServerContext>().create({
  transformer: superjson,
});
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
