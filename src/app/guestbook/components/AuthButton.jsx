import { motion } from "framer-motion";
import Image from "next/image";

export const AuthButton = ({title, file, onClick}) => {
  return (
    <motion.button
      initial={{ scale: 0.97 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className="focus:outline-none"
      title={title}
      onClick={onClick}
    >
      <div className="group relative inline-flex cursor-pointer items-center overflow-hidden rounded-full bg-zinc-800 px-8 py-3 transition">
        <div className="absolute inset-0 flex items-center [container-type:inline-size]">
          <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100" />
        </div>
        <div className="absolute inset-0.5 rounded-full bg-zinc-900" />
        <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100" />
        <span className="font-mona relative mt-px flex items-center space-x-4 bg-gradient-to-b from-white/25 to-white bg-clip-text font-medium text-transparent transition-all duration-200 md:text-lg">
          <Image
            src={`/images/icons/${file}.svg`}
            alt="GitHub"
            width={24}
            height={24}
            className="z-50 h-6 w-6 text-white"
          />
          <span>{title}</span>
        </span>
      </div>
    </motion.button>
  );
}
