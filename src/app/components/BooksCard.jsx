import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import Link from "next/link";

export const BooksCard = ({ cover, name, desc, preview, buy }) => {
  return (
    <div>
      <div
        style={{ background: `url(${cover})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        <div className="items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={preview}
            className="mr-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <BookOpenIcon className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={buy}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <ArrowDownTrayIcon className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{name}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};
