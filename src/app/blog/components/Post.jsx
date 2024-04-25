"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Post = ({ imgUrl, title, desc, url, index }) => {
  const [indexCount, setIndexCount] = useState(index);
  const handleDone = () => {
    setIndexCount(0);
  }
  return (
    <motion.div
      className="w-full p-0 m-0 transition select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      whileHover={{ scale: "1.02" }}
      whileTap={{ scale: "0.99" }}
      onAnimationComplete={handleDone}
      transition={{ duration: 0.1, delay: indexCount / 8 }}
    >
      <a
        className="group block w-full bg-[#0a0a0a] hover:bg-primary-500 cursor-pointer"
        href={!(url === "") && url}
        target={!(url === "") && "_blank"}
      >
        <div className="flex justify-between">
          <div className="px-4 py-2">
            <p className="text-md mb-0.5">{title}</p>
            <p className="mb-1 text-sm text-[#737373] group-hover:text-white">
              {desc}
            </p>
          </div>
          <img
            className="aspect-auto hidden md:block md:w-56 lg:w-96 object-cover"
            src={imgUrl}
            alt={title}
          />
        </div>
      </a>
    </motion.div>
  );
};
