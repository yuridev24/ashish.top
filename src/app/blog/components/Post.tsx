"use client";

import { ProgressBarLink as Link } from "@/components/ProgressBar";

export const Post = ({ imgUrl, title, url, index, desc, date }: any) => {
  return (
    <div
      className="w-full p-0 m-0 transition select-none"
    >
      <Link
        className="group block w-full bg-dark-700 hover:bg-primary-500 cursor-pointer"
        href={!(url === "") && url}
      >
        <div className="flex justify-between">
          <div className="px-4 py-2">
            <p className="text-md mb-0.5">{title}</p>
            <p className="mb-1 text-sm text-dark-200 group-hover:text-white">
              {desc} - {date}
            </p>
          </div>
          <img
            className="aspect-auto hidden md:block md:w-24 lg:w-56 object-cover"
            src={imgUrl}
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
};
