import Head from "next/head";

type Props = {
  title: string;
  description?: string;
};

const SEO = ({ title, description = defaultValues.description }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;

const defaultValues = {
  description: "We sell products that worth your style.",
};
