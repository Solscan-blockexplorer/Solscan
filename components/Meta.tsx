import Head from "next/head";
interface MInterface {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MInterface) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/Frame.svg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Solscan Explorer",
  keywords: "",
  description: "",
};

export default Meta;
