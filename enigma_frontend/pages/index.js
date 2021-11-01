import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.landing_screen}>
        <h1>Welcome To My</h1>
        <h1>World</h1>
      </div>
    </Layout>
  );
}
