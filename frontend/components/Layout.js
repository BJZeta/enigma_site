import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase />}

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
