// import groq from "groq";
import Link from "next/link";
import Layout from "../components/Layout";
// import ArtPiece from "../components/ArtPiece";
import styles from "../styles/Home.module.css";
// import { sanityClient } from "../lib/sanity";

export default function Home({}) {
  return (
    <Layout>
      <div className={styles.jumbotron}>
        <h1>ENIGMA</h1>
        <h2>See a collection of unique pieces</h2>
        <Link href="/gallery">
          <a className="">
            <h2>Come to the Gallery</h2>
          </a>
        </Link>
        <ul className={styles.slideshow}>
          <li>image 1</li>
          <li>image 2</li>
          <li>image 3</li>
        </ul>
      </div>
      {/* <div className={styles["recent-pieces"]}>
        {pieces.length > 0 &&
          pieces.map(
            ({ _id, title = "", slug = "", mainImage }) =>
              slug && (
                <ArtPiece
                  _id={_id}
                  title={title}
                  slug={slug}
                  mainImage={mainImage}
                />
              )
          )}
      </div> */}
    </Layout>
  );
}

// const query = `
// *[_type == "art" && publishedAt < now()] | order(publishedAt desc)
// `;

// export async function getStaticProps() {
//   const pieces = await sanityClient.fetch(query);
//   return {
//     props: {
//       pieces,
//     },
//   };
// }
