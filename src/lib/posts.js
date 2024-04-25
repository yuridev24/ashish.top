import { query } from "@/lib/hashnode";

export async function getPostBySlug(slug) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author {
              name
              profilePicture
              socialMediaLinks {
                twitter
              }
            }
            content {
              html
            }
            coverImage {
              url
            }
            id
            publishedAt
            title
          }
        }
      }
    `,
    variables: {
      host: process.env.HASHNODE_HOST,
      slug,
    },
  });

  const post = publication?.post ?? null;

  return post;
}
