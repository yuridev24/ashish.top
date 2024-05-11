"use client";

import { useState, useEffect } from "react";
import { ProgressBarLink as Link } from "./ProgressBar";
import GithubIcon from "/public/github-icon.svg";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { poppins } from "@/app/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { ProgressBarLink } from "./ProgressBar";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Highlights",
    path: "/highlights",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Guestbook",
    path: "/guestbook",
  },
];

export const NavBar = () => {
  const route = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarTop, setNavbarTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarTop(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <nav
        className={
          `transition-colors duration-75 fixed mx-auto top-0 left-0 right-0 z-[99] ` +
          (navbarTop || navbarOpen
            ? "bg-dark-900 bg-opacity-80 backdrop-blur-sm"
            : "bg-transparent")
        }
      >
        <div
          className={
            `transition-padding flex container flex-wrap items-center justify-between mx-auto px-4 py-2 ` +
            (navbarTop ? "md:py-4" : "md:py-6 md:px-6")
          }
        >
          <ProgressBarLink
            href={"/"}
            className={`text-xl md:text-2xl text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text font-semibold ${poppins.className}`}
            onClickAction={() => setNavbarOpen(false)}
          >
            Ashish Agarwal
          </ProgressBarLink>
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
                <li key={index} className="block">
                  <NavLink
                    title={link.title}
                    href={link.path}
                    active={
                      route === link.path
                        ? true
                        : link.path === "/" && route !== "/"
                        ? false
                        : route.startsWith(link.path)
                    }
                  />
                </li>
              ))}
              <motion.div
                initial={{ x: 800 }}
                animate={{ x: 0 }}
                className={"transition scale-[1.05]"}
                whileHover={{ scale: "1.1" }}
                whileTap={{ scale: "1" }}
                transition={{ duration: 0.1 }}
              >
                <Link
                  href="https://github.com/ashishagarwal2023"
                  className="hover:opacity-80 transition duration-200 w-32 h-32"
                >
                  <Image
                    src={GithubIcon}
                    alt="GitHub Icon"
                    width={32}
                    height={32}
                  />
                </Link>
              </motion.div>
            </ul>
          </div>
        </div>
        {navbarOpen ? (
          <MenuOverlay links={navLinks} action={() => setNavbarOpen(false)} />
        ) : null}
      </nav>
  );
};
