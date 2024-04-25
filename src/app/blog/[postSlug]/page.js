import { Heading } from "./components/Heading";

'use client';


const Post = () => {
  return (
    <>
      <Heading />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { params: { postSlug: "first" } },
  ];
}

export default Post;