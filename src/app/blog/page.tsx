import { NewsLetter } from "./components/NewsLetter";
import { Posts } from "./components/Posts";

export default async function Blog() {
  const posts = await Posts(); // Wait for the Promise to resolve

  return (
    <>
      <NewsLetter />
      {/* <Search /> */}
      {posts}
    </>
  );
}