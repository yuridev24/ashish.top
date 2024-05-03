import { query } from "@/lib/hashnode";

export async function getPageBySlug(slug: any) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          staticPage(slug: $slug) {
            content {
              html
            }
            id
            seo {
              description
            }
            slug
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

  const page = publication?.staticPage ?? null;

  return page;
}
