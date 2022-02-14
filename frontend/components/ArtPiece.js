import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "../styles/ArtPiece.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function ArtPiece({ _id, slug, mainImage, title }) {
  const imageProps = useNextSanityImage(client, mainImage);

  // const { blurDataURL, src, width, height } = imageProps;

  console.log(imageProps);

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
          />
        </div>
        <h3>{title}</h3>
      </a>
    </Link>
  );
}
