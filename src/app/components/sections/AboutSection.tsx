"use client";

import { useTransition, useState, useRef } from "react";
import Image from "next/image";
import { TabButton } from "@/app/components/ui/TabButton";
import { motion, useInView } from "framer-motion";
import { Skill } from "@/app/components/ui/Skill";

const skills = [
  "Node.js",
  "React",
  "Django",
  "Flask",
  "Next.js",
  "R",
  "MySQL",
  "Firebase",
  "JavaScript",
  "TypeScript",
  "Python",
  "jQuery",
  "Bootstrap",
  "TailwindCSS",
  "Web Development",
  "Bash",
  "HTML",
  "CSS",
  "Git",
  "Tech Support",
  "Tech Enthusiast",
  "Tkinter",
  "Github",
  "Open-source",
  "Material UI",
  "Markdown",
];

export const AboutSection = () => {
  const [slices, setSlices] = useState(15);

  const handleExtend = () => {
    if (slices === 15) {
      setSlices(skills.length)
    } else {
      setSlices(15);
    };
  }
  
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="flex flex-wrap gap-2 pt-8">
          {skills.slice(0, slices).map((skill, index) => (
            <span className="tag" key={index}>
              {skill}
            </span>
          ))}
          <span className="tag" onClick={handleExtend}>
            •••
          </span>
        </div>
      ),
    },
    {
      title: "Certificates",
      id: "certifications",
      content: (
        <ul className="list-disc px-4 w-full py-4">
          <Skill
            name="Google IT Support"
            file="gitsupport.png"
            href="https://www.credly.com/badges/36b52ef9-b4fe-475a-aae1-400452724d07/public_url"
            type="Professional Certificate"
          />
          <Skill
            name="Google Data Analytics"
            href="#"
            file="gdataanalytics.png"
            type="Professional Certificate"
          />
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="text-white" id="about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: inView ? 0.5 : 0 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <div className="overflow-hidden h-min rounded-md">
          {/* <Image
            src="/images/about-image.png"
            width={500}
            alt="About Me Image"
            height={500}
            className="rounded-lg transition hover:scale-105"
          /> */}
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            src="https://www.youtube.com/embed/oOjwzJX6Jxc?si=rvO2gZN1KCRgUNGS"
            className="rounded-lg transition hover:scale-105 w-[500px] h-[500px]"
          ></iframe>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full w-full overflow-auto">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I&apos;m a front-end developer with a passion for creating
            interactive and responsive web applications as well as a back-end
            developer. I have experience working with JavaScript, React,
            Node.js, HTML, CSS, Python, Git and more frameworks, languages and
            libraries. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I work as a freelancer and open-source. As
            well as, I&apos;m a young book author too! <strong>I&apos;m just 12 years old with this lot knowldge!</strong>
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="min-h-96">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
