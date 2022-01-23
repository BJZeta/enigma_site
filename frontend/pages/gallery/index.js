import Layout from "../../components/Layout";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import client from "../../client";
import groq from "groq";
import { useRouter } from "next/router";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function GalleryPage({pieces}) {
  const router = useRouter();

  return (
    <Layout
      title="ENIGMA | GALLERY"
      description="Gallery of Enigma's latest pieces"
    >
      <h1>Gallery Page</h1>
      <div id="recent-pieces">
        {pieces.length > 0 &&
          pieces.map(
            ({ _id, title = "", slug = "", mainImage }) =>
              slug && (
                <li key={_id}>
                  <Link href="/gallery/[slug]" as={`/gallery/${slug.current}`}>
                    <a>
                      <img src={urlFor(mainImage)} alt={title} />
                      <h3>{title}</h3>
                    </a>
                  </Link>
                </li>
              )
          )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const pieces = await client.fetch(groq`
  *[_type == "art" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      pieces,
    },
  };
}