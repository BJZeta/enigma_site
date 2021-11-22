import styles from "../styles/Home.module.css";
import { sanityClient } from "../sanity";

export default function Home({art_pieces}) {
  console.log(art_pieces)
  return <div className={styles.container}>Home Page</div>;
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
