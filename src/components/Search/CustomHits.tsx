import { Post } from "@/app/blog/components/Post";
import { PostsWrapper } from "@/app/blog/components/PostsWrapper";
import { connectStateResults } from "react-instantsearch-dom";

function Hits({ searchState, searchResults }: any) {
  return (
    <>
      {searchResults?.hits.length === 0 && searchState.query.trim() !== "" && (
        <div className="mt-8 mb-4 font-sans gap-4 flex flex-col">
          <p className="text-center text-xl">
            No results found for &quot;{searchState.query}&quot;
          </p>
        </div>
      )}
      {searchResults?.hits.length === 0 && searchState.query.trim() === "" && (
        <PostsWrapper />
      )}
      {searchResults?.hits.length > 0 && (
        <div className="mt-8 mb-4 font-sans gap-4 flex flex-col">
          {searchResults.hits.map((post: any, index: number) => (
            <Post
              key={index}
              url={`/blog/${post.slug}`}
              imgUrl={post.cover}
              title={post.title}
              index={index}
              date={new Date(post.published).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              desc={post.subtitle}
            />
          ))} 
        </div>
      )}
    </>
  );
}

export default connectStateResults(Hits);
