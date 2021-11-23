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
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "ENIGMA | Home",
  description: "Art blog site for ENIGMA",
  keywords: "art, blog, painting",
};
