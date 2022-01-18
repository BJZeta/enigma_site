import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function ArtPiece() {
  const router = useRouter();

  return <Layout>An Art Piece</Layout>;
}
