import { trpc } from "~/lib/trpc";

export default function useHelloQuery(options?: any) {
  return trpc.hello.useQuery(options);
}
