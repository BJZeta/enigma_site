import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "ENIGMA | HOME",
  description: "Welcome to the art gallery of ENIGMA",
  keywords: "art, painting, digital art, auction",
};
