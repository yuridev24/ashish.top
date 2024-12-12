const { getAllPostSlugs, getPostBySlug } = require("./postsjs.js");

// build-search.js
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

async function getAllBlogPosts(){
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  );
  const filteredPosts = posts.filter(post => typeof post !== "undefined");
  return filteredPosts;
};

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    console.log(`${post.title} - ${post.id}`);
    return {
      objectID: post.id,
      title: post.title,
      subtitle: post.subtitle,
      slug: post.slug,
    };
  });

  return transformed;
}

(async function () {
  dotenv.config();

  try {
    const posts = await getAllBlogPosts();
    const transformed = transformPostsToSearchObjects(posts);

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    // initialize the index with your index name
    const index = client.initIndex("portfolio_content");

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed);

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n"
      )}`
    );
  } catch (error) {
    console.log(error);
  }
})();
