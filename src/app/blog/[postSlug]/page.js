import { Heading } from "./components/Heading";

export const generateStaticParams = () => {
  return [
    { postSlug: "first" },
  ];
};

export const Post = () => {
  return (
    <>
      <Heading />
    </>
  );
};

export default Post;
