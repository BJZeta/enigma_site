import Link from "next/link";
import Layout from "../../components/Layout";
import { sanityClient, urlFor } from "../../sanity";
import styles from "../../styles/GalleryPage.module.css";

export default function GalleryPage({ art_pieces }) {
  console.log(art_pieces);
  return (
    <Layout>
      <h1>Gallery</h1>
      <div className={styles.gallery_items}>
        {art_pieces.map((art_piece) => (
          <div
            className={styles.gallery_item}
            key={`art-piece-${art_piece.slug.current}`}
          >
            <img
              src={urlFor(art_piece.mainImage)}
              alt={art_piece.slug.current}
            />
            <h2>{art_piece.name}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "art-piece"]';
  const art_pieces = await sanityClient.fetch(query);

  if (!art_pieces.length) {
    return {
      props: {
        art_pieces: [],
      },
    };
  } else {
    return {
      props: {
        art_pieces,
      },
    };
  }
};
