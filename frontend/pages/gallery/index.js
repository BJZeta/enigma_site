import Layout from "../../components/Layout";
import ArtPiece from "../../components/ArtPiece";
import { sanityClient } from "../../lib/sanity";
import styles from "../../styles/Gallery.module.css";

export default function GalleryPage({ pieces }) {
  return (
    <Layout
      title="ENIGMA | GALLERY"
      description="Gallery of Enigma's latest pieces"
    >
      <div className={styles.title}>
        <h1>Gallery</h1>
      </div>
      <div className={styles["recent-pieces"]}>
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
      </div>
    </Layout>
  );
}

const query = `
*[_type == "art" && publishedAt < now()] | order(publishedAt desc)
`;

export async function getStaticProps() {
  const pieces = await sanityClient.fetch(query);
  return {
    props: {
      pieces,
    },
  };
}
