"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition duration-200 opacity-full pointer-events-auto fixed bottom-0 z-[10] flex right-0 p-10 ${
        showScrollTop ? "" : "opacity-0"
      }`}
      onClick={handleScrollTop}
    >
      <button className="text-primary-400 ml-auto aspect-square cursor-pointer rounded-full bg-dark-900 px-1 hover:bg-dark-800 sm:px-2">
        <Image
          src="/images/icons/scroll.svg"
          className="w-6 h-6 text-primary-400"
          alt="Scroll to top"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
