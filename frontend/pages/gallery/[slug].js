import { useRouter } from "next/router";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import Layout from "../../components/Layout";
import styles from "../../styles/ArtPiecePage.module.css";

export default function ArtPiecePage({ art }) {
  const router = useRouter();

  console.log(art);

  const {
    description,
    for_sale,
    mainImage,
    publishedAt,
    sale_link,
    title,
    slug,
  } = art;

  const imageProps = useNextSanityImage(client, mainImage);

  return (
    <Layout title={`ENIGMA | ${slug.current}`}>
      <article className={styles["art-info"]}>
        <section>
          <h1>{title}</h1>
          <p>{description}</p>
          {!for_sale ? (
            <h2>Piece is not for sale</h2>
          ) : (
            <h2>
              You can find this piece up for auction at{" "}
              <a href={sale_link} target="_blank">
                This Link
              </a>
            </h2>
          )}
        </section>
        <section>
          <div className={styles["art-piece"]}>
            <Image
              src={imageProps.src}
              loader={imageProps.loader}
              width={imageProps.width}
              height={imageProps.height}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </section>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "art" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const art = await client.fetch(
    `
    *[_type == "art" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      art,
    },
  };
}
