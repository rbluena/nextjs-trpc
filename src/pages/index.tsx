import type { NextPage } from "next";
import useHelloQuery from "~/lib/hooks/queries/useHelloQuery";

const Home: NextPage = () => {
  const { isLoading, data, error } = useHelloQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
