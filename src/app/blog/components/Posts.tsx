import { query } from '@/lib/hashnode';

import { Post } from "./Post";

export const Posts = async () => {
  const { data: { publication } } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 20) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                slug
                title
                subtitle
                publishedAt
              }
            }
          }
        }
      }
    `,
    variables: {
      host: process.env.HASHNODE_HOST
    }
  });
  const posts = publication.posts.edges.map(({ node }: any) => node);
  return (
    <div className="mt-8 mb-4 font-sans gap-4 flex flex-col">
      {posts.map((post: any, index: any) => (
        <Post
          key={index}
          url={`/blog/${post.slug}`}
          imgUrl={post.coverImage.url}
          title={post.title}
          index={index}
          date={new Date(post.publishedAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          desc={post.subtitle}
        />
      ))}
    </div>
  );
};
