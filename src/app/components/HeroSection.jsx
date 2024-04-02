"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:leading-normal sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ashish Agarwal",
                2000,
                "Web Developer",
                1250,
                "Front-end Developer",
                1250,
                "Back-end Developer",
                1250,
                "UI/UX Designer",
                1250,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Hey, this is Ashish Agarwal! I am an open-source programmer from
            India with deep knowledge in Python, JavaScript, R, SQL, PHP, HTML,
            CSS, Bash, Visual Basic, and other languages. I spend most of my
            time coding and building open-source programs. Currently, I am
            learning Next.js with React and have experience with frameworks like
            Django, Flask, Tailwind CSS, Bootstrap, Pygame, etc.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/ashishagarwal2023" target="_blank">
            <button className="transition duration-200 px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:opacity-80">
              Visit GitHub
            </button>
          </a>
          <a href="#about">
            <button className="group transition duration-200 px-1 py-1 w-full sm:w-fit rounded-full group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 bg-slate-800 text-white mt-3 opacity-90">
              <span className="block group-hover:bg-slate-900 rounded-full px-5 py-2 opacity-90 transition duration-200">
                Read More
              </span>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
