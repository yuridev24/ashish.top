"use client";

import { TypeAnimation } from "react-type-animation";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { SkillLogo } from "@/app/components/ui/SkillLogo";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen py-8 pb-4 pt-16 lg:pt-8" id="home">
      <div className="flex flex-row justify-center h-[50vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:leading-base sm:text-5xl lg:text-8xl font-extrabold">
            <span className="md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "Ashish Agarwal",
                  2000,
                  "Web Developer",
                  1250,
                  "Programmer",
                  1250,
                  "Free-lancer",
                  1250,
                  "Open-sourcer",
                  1250,
                  "Front-end Developer",
                  1250,
                  "Back-end Developer",
                  1250,
                  "UI/UX Designer",
                  1250,
                  "From India",
                  1250,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 font-[400] w-full px-4">
            Open-source freelancer, programmer from{" "}
            <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
              India
            </span>
            . Lot knowledge in languages like JavaScript, Python, R, SQL, HTML,
            CSS & Node.js. Experienced with frameworks like Next.js, Django and
            Flask. With knowledge of libraries like Bootstrap, TailwindCSS and
            jQuery and tools like Git, Prettier, and a lot more & increasing.
          </p>
          <div className="justify-center flex flex-row my-4 pb-2 gap-2 select-none">
            <SkillLogo path={"javascript.png"} language={"JavaScript"} />
            <SkillLogo path={"typescript.png"} language={"TypeScript"} />
            <SkillLogo path={"react.png"} language={"React"} />
            <SkillLogo path={"nextjs.svg"} language={"Next.js"} />
            <SkillLogo path={"svelte.png"} language={"Svelte"} />
            <SkillLogo path={"git.png"} language={"Git"} />
            <SkillLogo path={"tailwindcss.png"} language={"Tailwind CSS"} />
          </div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/resume.pdf">
              {" "}
              {/* download */}
              <button className="transition group duration-200 px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:opacity-80">
                <span>
                  Download CV{" "}
                  <ArrowDownTrayIcon className="group-hover:translate-y-[-1px] w-4 inline transition-transform translate-y-[-2px]" />
                </span>
              </button>
            </Link>
            <Link href="#about">
              <button className="group transition duration-200 px-1 py-1 w-full sm:w-fit rounded-full group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 text-white mt-3 opacity-90">
                <span className="block group-hover:bg-dark-900 rounded-full px-5 py-2 opacity-90 transition duration-200">
                  Know me more{" "}
                  <ArrowRightIcon className="w-4 inline group-hover:translate-x-[4px] transition-transform" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;