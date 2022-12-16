import type { AppProps, AppType } from "next/app";
import type { Session } from "next-auth";
import { trpc } from "~/lib/trpc";
import "root/styles/globals.css";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
