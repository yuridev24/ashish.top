"use client";

import React, { useState } from "react";
import Link from "next/link";
import GithubIcon from "/public/github-icon.svg";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { poppins } from "../fonts";
import Image from "next/image";
import {motion} from "framer-motion";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Books",
    path: "#books",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 bg-[#121212] z-[99]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className={`text-xl md:text-2xl text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text font-semibold ${poppins.className}`}
          onClick={() => setNavbarOpen(false)}
        >
          Ashish Agarwal
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="hidden lg:block">
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
            <motion.li
				initial={{y: 100}}
				animate={{y: 0}}
				className={"transition"}
				whileHover={{scale: "1.1"}}
				whileTap={{scale: "1.05"}}
				transition={{duration: 0.1}}>
              <Link
                href="https://github.com/ashishagarwal2023"
                className="hover:opacity-80 transition duration-200 w-32 h-32"
              >
                <Image src={GithubIcon} alt="GitHub Icon" width={32} height={32} />
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} action={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};
