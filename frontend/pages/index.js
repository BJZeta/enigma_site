import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import groq from "groq";
import Layout from "../components/Layout";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function Home({ pieces }) {
  return (
    <Layout>
      <div className="jumbotron">
        <h1>ENIGMA</h1>
        <h2>See a collection of unique pieces for auction</h2>
      </div>
      <div id="recent-pieces">
        {pieces.length > 0 &&
          pieces.map(
            ({ _id, title = "", slug = "", mainImage }) =>
              slug && (
                <li key={_id}>
                  <Link href="/gallery/[slug]" as={`/gallery/${slug.current}`}>
                    <a>
                      <img src={urlFor(mainImage)} alt={title} />
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
