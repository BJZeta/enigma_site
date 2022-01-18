import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link href="/">
          <a>ENIGMA</a>
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
