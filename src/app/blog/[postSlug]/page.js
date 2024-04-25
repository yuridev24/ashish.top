import { Heading } from "./components/Heading";

const Post = () => {
  return (
    <>
      <Heading />
    </>
  );
};

export async function generateStaticParams() {
  return [{ params: { postSlug: "first" } }];
}

export default Post;
