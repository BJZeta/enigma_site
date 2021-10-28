import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Enigma Art",
  description: "Explore the beautiful and dreary catalog of artist Enigma",
  keywords: "art, digital art, portfolio, painting",
};
