import Link from "next/link";
import Layout from "../../components/Layout";
import { sanityClient, urlFor } from "../../sanity";
import ArtPieceCard from "../../components/ArtPieceCard";
import styles from "../../styles/GalleryPage.module.css";

export default function GalleryPage({ art_pieces }) {
  console.log(art_pieces);
  return (
    <Layout>
      <h1>Gallery</h1>
      <div className={styles.gallery_items}>
        {art_pieces.map((piece) => (
          <ArtPieceCard
            img={piece.mainImage}
            slug={piece.slug.current}
            id={piece.id}
            title={piece.title}
          />
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
