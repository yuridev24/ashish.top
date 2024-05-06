"use client";

import { BookOpenIcon } from "@heroicons/react/24/outline";
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import Link from "next/link";
import { motion } from "framer-motion";

export const BooksCard = ({ cover, name, desc, preview, buy }: any) => {
  return (
    <motion.div
      className="p-0 m-0 transition w-full select-none"
      initial={{ scale: "0" }}
      animate={{ scale: "1" }}
      whileHover={{ scale: "1.05" }}
      whileTap={{ scale: "0.97" }}
      transition={{ duration: 0.1 }}
    >
      <Link
        className="group block w-full bg-dark-900 hover:bg-primary-500"
        href={preview}
        target="_blank"
      >
        <img
          className="aspect-auto w-full object-cover"
          src={cover}
          alt={name}
        />
        <div className="border border-[#171717] px-4 py-2 group-hover:border-primary-400">
          <p className="text-md mb-0.5">{name}</p>
          <p className="mb-1 text-sm text-[#737373] group-hover:text-white">
            {desc}
          </p>
          <div className="my-2">
            <div className="flex flex-row justify-between">
              <Link
                href={preview}
                target="_blank"
                className="text-primary-400 group-hover:bg-primary-800 rounded-full p-2 font-bold bg-primary-900"
              >
                <ArrowDownTrayIcon className="w-6 h-6 text-inherit" />
              </Link>
              <Link
                href={buy}
                target="_blank"
                className="text-primary-400 group-hover:bg-primary-800 rounded-full p-2 font-bold bg-primary-900"
              >
                <BookOpenIcon className="w-6 h-6 text-inherit" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
