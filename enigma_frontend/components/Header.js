import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.title}>
        <Link href="/">
          <a>Enigma</a>
        </Link>
      </div>
    </header>
  );
}
