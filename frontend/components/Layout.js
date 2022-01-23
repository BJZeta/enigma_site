import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import Contact from "./Contact";

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

      <div className={styles.main_content}>{children}</div>

      <Contact />

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "ENIGMA | HOME",
  description: "Welcome to the art gallery of ENIGMA",
  keywords: "art, painting, digital art, auction",
};
