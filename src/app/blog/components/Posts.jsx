"use client";

import { useState } from "react";
import { LoadMore } from "./LoadMore";
import { Post } from "./Post";

const posts = [
  {
    img: "/images/projects/1.png",
    title: "First!",
    desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    url: "",
  },
  {
    img: "/images/projects/1.png",
    title: "First!",
    desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    url: "",
  },
  {
    img: "/images/projects/1.png",
    title: "First!",
    desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    url: "",
  },
  {
    img: "/images/projects/1.png",
    title: "First!",
    desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    url: "",
  },
];

export const Posts = () => {
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);
  const handleLoadMore = () => {
    setLoadMoreDisabled(true);
    setTimeout(() => {
      setLoadMoreDisabled(false);
    }, 3000);
  }
  return (
    <div className="mt-8 font-sans gap-4 flex flex-col">
      {posts.map((post, index) => (
        <Post
          key={index}
          index={index}
          imgUrl={post.img}
          title={post.title}
          desc={post.desc}
          url={post.url}
        />
      ))}
      <LoadMore action={handleLoadMore} disabled={loadMoreDisabled} />
    </div>
  );
};
