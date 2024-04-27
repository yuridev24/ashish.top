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
      post.subtitle || `Read ${post.title} on Ashish Agarwal's Blog`,
    openGraph: {
      type: 'article',
      article: {
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        authors: ['Ashish Agarwal'],
        tags: ["programming", "coding", 'web dev', "ashish", "computer", "nextjs", "react", "framer motion", "tailwindcss", "developer"],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@ashishgr2024',
        creator: '@ashishgr2024',
      },
      linkedin: {
        title: `${post.title} - Ashish Agarwal`,
        description:
          post.subtitle || `Read ${post.title} on Ashish Agarwal's Blog`,
      },
      images: [
        {
          url: post.coverImage.url,
          alt: post.title,
        },
      ],
    },
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
