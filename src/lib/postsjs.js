const { query } = require("./hashnodejs.js");

async function getAllPostSlugs() {
  const {
    data: { publication },
  } = await query({
    query: `
     query Publication($host: ObjectId){
  publication(id: $host) {
   	posts(first: 50) {
      edges{
        node{
          slug
        }
      }
    }
  }
}
    `,
    variables: {"host": "6617c97b653f6f2168c868d7"},
  });
  const slugs = publication.posts.edges.map((edge) => edge.node.slug) ?? [];
  return slugs;
}

async function getPostBySlug(slug) {
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
            updatedAt
            subtitle
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
  if(!post){
    return undefined;
  }

  return post;
}

module.exports = {getPostBySlug, getAllPostSlugs}