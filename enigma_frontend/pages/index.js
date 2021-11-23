import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../sanity";
import styles from "../styles/Home.module.css";

export default function Home({ art_pieces }) {
  console.log(art_pieces);
  return (
    <Layout>
      <div className={styles.jumbotron}>
        <h1>ENIGMA</h1>
        <h1>Every Second is a Gift</h1>
      </div>

      <div className={styles.top_paintings}>
        {art_pieces.map((piece) => (
          <img src={urlFor(piece.mainImage)} alt={piece.slug} />
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
