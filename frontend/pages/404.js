import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>{"Uh Oh, this page doesn't exist"}</h1>
      <h1>
        <Link href="/">
          <a>Take Me Home</a>
        </Link>
      </h1>
    </Layout>
  );
}
