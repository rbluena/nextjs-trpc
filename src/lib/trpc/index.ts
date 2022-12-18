import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";

import { AppRouter } from "~/server/routers/_app.router";
import { isDevelopment, PUBLIC_URL } from "~/constants/index";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        loggerLink({
          enabled: (opts) => {
            return (
              isDevelopment ||
              (opts.direction === "down" && opts.result instanceof Error)
            );
          },
        }),
        httpBatchLink({
          url: `${PUBLIC_URL}/api/trpc`,
        }),
      ],

      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }

        return {};
      },

      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
    };
  },
  ssr: false,
});
