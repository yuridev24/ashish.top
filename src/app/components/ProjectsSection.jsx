"use client";

import { useState, useRef } from "react";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { ProjectsCard } from "./ProjectsCard";

const projectTags = ["All", "Web", "Back-end", "API"];

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "This is my first project I built with Next.js. I watched a tutorial on youtube for this!",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ashishagarwal2023/portfolio",
    previewUrl: "https://ashishagarwal2023.vercel.app/",
  },
  {
    id: 2,
    title: "FreeGPT.js",
    description:
      "A secure, FREE (with no token/auth) API for ChatGPT! Only works on client-side JavaScript...",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Back-end", "API"],
    gitUrl: "https://github.com/ashishagarwal2023/freegptjs",
    previewUrl: "https://freegpt.js.org",
  },
  {
    id: 3,
    title: "CutYourURL",
    description:
      "A advanced Bitly URL Shortener Clone with features like custom URL, reCAPTCHA, limited clicks, expire automatically and more! Built with Flask!",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Back-end"],
    gitUrl: "https://github.com/ashishagarwal2023/CutYourURL",
    previewUrl: "https://cutyoururl.tech",
  },
  {
    id: 4,
    title: "Free WindowsActivator",
    description:
      "Simple Python Project to activate windows. It still works for 7-11!",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/ashishagarwal2023/WindowsActivator",
    previewUrl: "https://github.com/ashishagarwal2023/WindowsActivator",
  },
  {
    id: 6,
    title: "CutYourURL Website",
    description:
      "A website (is not complete yet) for the CutYourURL Project, in Svelte+TailwindCSS.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ashishagarwal2023/CutYourURLWebsite",
    previewUrl: "https://cutyour-url.netlify.app/",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
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
              key={project.id}
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
