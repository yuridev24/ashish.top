import { ProgressBarLink as Link } from "@/components/ProgressBar";
import { motion } from "framer-motion";

const NavLink = ({ href, title, onClick, active }: any) => {
  return (
    <motion.div
      initial={{ x: 800 }}
      animate={{ x: 0 }}
      className={"transition scale-[1.05]"}
      whileHover={{ scale: "1.1" }}
      whileTap={{ scale: "1" }}
      transition={{ duration: 0.1 }}
    >
      <Link
        href={href}
        className={
          "py-2 pl-3 pr-4 sm:text-xl md:text-lg rounded md:p-0 " +
          (active
            ? " text-blue-400 hover:text-blue-400"
            : "text-[#ADB7BE] hover:text-white")
        }
        onClickAction={onClick}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
