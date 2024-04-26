import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { Article } from "./components/Article";
import { NewsLetter } from "../components/NewsLetter";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    postSlug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return {
    title: `${post.title} - Ashish Agarwal`,
    description:
      post.seo?.description || `Read ${post.title} on Ashish Agarwal's Blog`,
  };
}

export default async function Post({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return (
    <>
      <Article post={post} />
      <NewsLetter />
    </>
  );
}
