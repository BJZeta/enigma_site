import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from '../styles/Layout.module.css'

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

      <div id="contact">
        <h1>Contact for Commissions</h1>
        <p>Please feel free to send in commission requests at:</p>
        <a href="mailto:enigm.artek@gmail.com" target="_blank">
          enigm.artek@gmail.com
        </a>
        <a href="https://www.instagram.com/en_igm.artek/" target="_blank">
          <AiOutlineInstagram />
        </a>
      </div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "ENIGMA | HOME",
  description: "Welcome to the art gallery of ENIGMA",
  keywords: "art, painting, digital art, auction",
};
