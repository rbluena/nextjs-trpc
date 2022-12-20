import * as trpc from "@trpc/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/utils/prisma";

/**
 * @returns
 */
export function createServerContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return {
    req,
    res,
    user: null,
    prisma,
  };
}

export type ServerContext = trpc.inferAsyncReturnType<
  typeof createServerContext
>;
