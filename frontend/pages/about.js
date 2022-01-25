import Layout from "../components/Layout";
import styles from '../styles/AboutPage.module.css'

export default function AboutPage() {
  return (
    <Layout title="ENIGMA | ABOUT" description="About page for artist ENIGMA">
      <section className={styles.about}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Version 1.0.0</p>
      </section>
    </Layout>
  );
}
