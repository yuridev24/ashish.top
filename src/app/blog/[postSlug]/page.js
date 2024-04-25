'use client';

import { useParams } from "next/navigation";

const Post = () => {
  const postSlug = useParams().postSlug;
  return (
    <>
      {postSlug}
    </>
  );
}

export default POst;