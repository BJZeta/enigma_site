import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function GalleryPage() {
  const router = useRouter();

  return (
    <Layout
      title="ENIGMA | GALLERY"
      description="Gallery of Enigma's latest pieces"
    >
      <h1>Gallery Page</h1>
    </Layout>
  );
}
