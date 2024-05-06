"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, action }: any) => {
  const route = usePathname();
  return (
    <motion.ul
      className="flex flex-col py-0 md:py-8 items-center z-[99] rounded-lg w-full"
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      transition={{ duration: 0.2 }}
    >
      {links.map((link: any, index: any) => (
        <motion.li
          key={index}
          className="my-[5vh] text-xl"
          initial={{ opacity: 0, rotate: index % 2 === 0 ? -90 : 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        >
          <NavLink
            href={link.path}
            title={link.title}
            onClick={action}
            active={route === link.path}
          />
        </motion.li>
      ))}
      <motion.li className="my-[5vh] text-xl" transition={{ duration: 0.3 }}>
        <NavLink
          href={"https://github.com/ashishagarwal2023"}
          title={"GitHub"}
          onClick={action}
          active={false}
        />
      </motion.li>
    </motion.ul>
  );
};

export default MenuOverlay;
