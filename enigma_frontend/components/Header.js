import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return <header>
      <div>
          <Link href="/">
              <a>Enigma</a>
          </Link>
      </div>
  </header>;
}
