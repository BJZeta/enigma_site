import Link from "next/link";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "../styles/ArtPiece.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function ArtPiece({ _id, slug, mainImage, title }) {
  return (
    <Link href="/gallery/[slug]" as={`/gallery/${slug.current}`} key={_id}>
      <a className={styles.piece}>
        <img src={urlFor(mainImage)} alt={title} />
        <h3>{title}</h3>
      </a>
    </Link>
  );
}
