"use client";

import { useState, useRef } from "react";
import { ProjectTag } from "@/app/components/ui/ProjectTag";
import { motion, useInView } from "framer-motion";
import { ProjectsCard } from "@/app/components/ui/ProjectsCard";

const projectTags = ["All", "Web", "Back-end", "API"];

const projectsData = [
  {
    title: "Next.js Portfolio Website",
    description:
      "This is my first project I built with Next.js. With a guestbook, blog and more!",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuridev24/ashish.top",
    previewUrl: "https://ashish.top/",
  },
  {
    title: "ClickCrystals Website (Next.js)",
    description:
      "A website for a minecraft mod called ClickCrystals purely in Next.js. With framer motion, tailwindCSS, prisma, postgres, and lot more tech!",
    image: '/images/projects/clickcrystals.png',
    tag: ['All', 'Web'],
    gitUrl: "http://github.com/thetrouper/ClickCrystalsXYZ",
    previewUrl: "https://clickcrystals.xyz"
  },
  {
    title: "Google.com UI Clone",
    description:
      "A design of Google.com purely in TailwindCSS. A little functionallity to auth with google as well as for your custom profile picture!",
    image: "/images/projects/googleclone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ashishagarwal2023/google-clone",
    previewUrl: "https://google-clone-ashish.vercel.app/",
  },
  {
    title: "ChatGPT Clone",
    description:
      "A ChatGPT chat interface UI clone with my own FreeGPT.js, a library to use ChatGPT for free!",
    image: "/images/projects/gptclone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ashishagarwal2023/chatgpt-clone",
    previewUrl: "http://ashishagarwal.is-a.dev/chatgpt-clone/",
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1},
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white mt-4 mb-2 md:mb-4 font-semibold">
        <span className="text-xl text-white font-thin">Here are mine...</span>
        <br />
        <span className="bg-gradient-to-r from-primary-300 via-primary-450 bg-clip-text to-primary-500 radial text-transparent">
          Projects
        </span>
      </h2>
      <div className="text-white md:flex flex-rows justify-center items-center md:gap-2 py-6">
        {projectTags.map((tagName, index) => (
          <ProjectTag
            key={index}
            name={tagName}
            onClick={handleTagChange}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectsCard
              key={index}
              title={project.title}
              desc={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </ul>
    </section>
  );
};
