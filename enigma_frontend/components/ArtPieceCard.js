import { urlFor } from "../sanity";
import Link from "next/link";

export default function ArtPieceCard({ img, slug, id, title }) {
  return (
    <div key={id}>
      <Link href={`gallery/${slug}`}>
        <a>
          <img src={urlFor(img)} alt={slug} />
          {title && <h2>{title}</h2>}
        </a>
      </Link>
    </div>
  );
}
