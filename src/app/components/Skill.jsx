import { motion } from "framer-motion";

export const Skill = ({ name, file, type, href = "" }) => {
  return (
    <a
      href={!(href === "") ? href : undefined}
      target={href === "" ? undefined : "_blank"}
    >
      <motion.div
        className={
          `select-none group hover:bg-gradient-to-r hover:from-dark-500 hover:via-dark-600 hover:to-dark-500 cursor-pointer flex flex-row items-center justify-center gap-4 px-4 py-2 bg-dark-950 border border-dark-800`
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <img className="h-auto w-8" src={`/images/icons/${file}`} alt={name} />
        <p className="self-stretch w-[1px] bg-[#171717]"></p>
        <div className="group-hover:text-slate-100 w-full text-white">
          <p>{name}</p>
          <p className="text-[#737373] group-hover:text-slate-200 text-sm">
            {type}
          </p>
        </div>
      </motion.div>
    </a>
  );
};
