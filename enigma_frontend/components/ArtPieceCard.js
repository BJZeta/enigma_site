import { urlFor } from "../sanity";
import Link from "next/link";
import styles from "../styles/ArtPieceCard.module.css";

export default function ArtPieceCard({ img, slug, id, title }) {
  return (
    <div key={id} className={styles.homescreen}>
      <Link href={`gallery/${slug}`}>
        <a>
          <img src={urlFor(img)} alt={slug} />
          {title && <h2>{title}</h2>}
        </a>
      </Link>
    </div>
  );
}
