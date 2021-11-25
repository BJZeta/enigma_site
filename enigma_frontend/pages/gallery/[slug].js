import { sanityClient, urlFor } from "../../sanity";
import Layout from "../../components/Layout";
import styles from "../../styles/GalleryPiecePage.module.css";

export default function GalleryPiecePage({
  title,
  description,
  type_of_piece,
  mainImage,
  id,
}) {
  return (
    <Layout>
      <div className={styles.info_section}>
        <h1>{title}</h1>
        <h3>{type_of_piece}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.pic_section}>
        <img src={urlFor(mainImage)} alt={title} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ params: { slug } }) => {
  const query = `*[ _type == "art-piece" && slug.current == $slug][0]{
        title,
        description,
        type_of_piece,
        mainImage,
        id
    }`;

  const art_piece = await sanityClient.fetch(query, { slug });

  if (!art_piece) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: art_piece.title,
        description: art_piece.description,
        type_of_piece: art_piece.type_of_piece,
        mainImage: art_piece.mainImage,
        id: art_piece.id,
      },
    };
  }
};
