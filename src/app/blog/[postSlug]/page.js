'use client';

import { useParams } from "next/navigation";

const post = () => {
  const postSlug = useParams().postSlug;
  return (
    <>
      {postSlug}
    </>
  );
}

export default post;