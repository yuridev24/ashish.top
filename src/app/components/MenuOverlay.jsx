"use client";

import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, action }) => {
  return (
    <motion.ul
      className="flex flex-col py-12 items-center z-[99] rounded-lg w-full"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1 }}
    >
      {links.map((link, index) => (
        <li key={index} className="my-auto text-xl">
          <NavLink href={link.path} title={link.title} onClick={action} />
        </li>
      ))}
    </motion.ul>
  );
};

export default MenuOverlay;
