"use client";

import { query } from '@/lib/hashnode';

import { Post } from "./Post";

export const Posts = async () => {
  const { data: { publication } } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                slug
                title
                subtitle
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
  const posts = publication.posts.edges.map(({ node }) => node);
  console.log(posts);
  return (
    <div className="mt-8 font-sans gap-4 flex flex-col">
      {posts.map((post, index) => (
        <Post
          key={index}
          url={`/blog/${post.slug}`}
          imgUrl={post.coverImage.url}
          title={post.title}
          index={index}
          desc={post.subtitle}
        />
      ))}
    </div>
  );
};
