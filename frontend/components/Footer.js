import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made by{" "}
        <a href="https://www.webdevbrandon.com" target="_blank">
          webdevbrandon
        </a>
      </p>
      <p className={styles.copyright}>Copyright &copy; ENIGMA 2022</p>
    </footer>
  );
}
