import * as trpc from "@trpc/server";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * TODO: import prisma here, ref to github example
 * @param param0
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
    // prisma,
    // task: prisma.task,
  };
}

export type ServerContext = trpc.inferAsyncReturnType<
  typeof createServerContext
>;
