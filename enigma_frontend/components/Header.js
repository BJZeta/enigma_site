import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Enigma</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
