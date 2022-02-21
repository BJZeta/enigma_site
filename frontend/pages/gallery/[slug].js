import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../../lib/sanity";
import Layout from "../../components/Layout";
import styles from "../../styles/ArtPiecePage.module.css";

const ArtPiecePage = ({
  description,
  for_sale,
  mainImage,
  sale_link,
  title,
  slug,
}) => {
  const imageProps = useNextSanityImage(sanityClient, mainImage);

  return (
    <Layout title={`ENIGMA | ${slug?.current}`}>
      <article className={styles["art-info"]}>
        <section>
          <h1>{title}</h1>
          <p>{description}</p>
          {!for_sale ? (
            <h2>Piece is not for sale</h2>
          ) : (
            <h2>
              You can find this piece up for auction at{" "}
              <a href={sale_link} target="_blank" rel="noreferrer">
                This Link
              </a>
            </h2>
          )}
        </section>
        <section>
          <div className={styles["art-piece"]}>
            {!imageProps ? (
              <h3>Loading...</h3>
            ) : (
              <Image
                src={imageProps.src}
                loader={imageProps.loader}
                width={imageProps.width}
                height={imageProps.height}
                layout="responsive"
                objectFit="contain"
                alt={title}
              />
            )}
          </div>
        </section>
      </article>
    </Layout>
  );
};

const query = `*[_type == "art" && slug.current == $slug][0]{
    description,
    for_sale,
    mainImage,
    sale_link,
    title,
    slug,
}`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
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
  const art = await sanityClient.fetch(query, { slug });

  if (!art) {
    return {
      props: null,
      notFound: true,
    };
  } else
    return {
      props: {
        description: art.description,
        for_sale: art.for_sale,
        mainImage: art.mainImage,
        sale_link: art.sale_link,
        title: art.title,
        slug: art.slug,
      },
    };
}

export default ArtPiecePage;
