import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../sanity";
import ArtPieceCard from "../components/ArtPieceCard";
import styles from "../styles/Home.module.css";

export default function Home({ art_pieces }) {
  console.log(art_pieces);
  return (
    <Layout>
      <div className={styles.jumbotron}>
        <h1>ENIGMA</h1>
        <h2>Every Second is a Gift</h2>
      </div>

      <div className={styles.top_paintings}>
        <h2>Most Recent Pieces</h2>
        <div className={styles.paintings}>
          {art_pieces.slice(0, 3).map((piece) => (
            <ArtPieceCard
              img={piece.mainImage}
              slug={piece.slug.current}
              id={piece.id}
            />
          ))}
        </div>
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
