import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../lib/sanity";
import styles from "../styles/ArtPiece.module.css";

export default function ArtPiece({ _id, slug, mainImage, title }) {
  const imageProps = useNextSanityImage(sanityClient, mainImage);

  return (
    <Link href="/gallery/[slug]" as={`/gallery/${slug.current}`} key={_id}>
      <a className={styles.piece}>
        <div className={styles.image}>
          <Image
            src={imageProps.src}
            loader={imageProps.loader}
            width={imageProps.width}
            height={imageProps.height}            
            layout="responsive"
            objectFit="contain"
            alt={title}
          />
        </div>
        <h3>{title}</h3>
      </a>
    </Link>
  );
}
