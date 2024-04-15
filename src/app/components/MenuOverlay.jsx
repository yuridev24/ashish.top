"use client";

import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, action }) => {
  return (
    <motion.ul
      className="flex flex-col py-12 items-center z-[99] rounded-lg w-full"
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      transition={{ duration: 1 }}
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          className="my-auto text-xl"
          initial={{ opacity: 0, rotate: index % 2 === 0 ? -90 : 90}}
          animate={{ opacity: 1, rotate: 0}}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        >
          <NavLink href={link.path} title={link.title} onClick={action} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuOverlay;
