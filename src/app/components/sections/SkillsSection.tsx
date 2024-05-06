"use client";

import { Skill } from "@/app/components/ui/Skill";

export const SkillsSection = () => {
  const skills = [
    {
      name: "Node.js",
      type: "Language",
      file: "nodejs.png",
    },
    {
      name: "JavaScript",
      type: "Language",
      file: "javascript.png",
    },
    {
      name: "TypeScript",
      type: "Language",
      file: "typescript.png",
    },
    {
      name: "HTML",
      type: "Language",
      file: "html.png",
    },
    {
      name: "Bash",
      type: "Language",
      file: "bash.png",
    },

    {
      name: "MySQL",
      type: "Language",
      file: "mysql.svg",
    },
    {
      name: "Firebase",
      type: "Collection of libraries",
      file: "firebase.svg"
    },
    {
      name: "Python",
      type: "Language",
      file: "python.svg",
    },
    {
      name: "jQuery",
      type: "JavaScript Library",
      file: "jquery.svg",
    },
    {
      name: "R",
      type: "Language",
      file: "r.png",
    },
    {
      name: "Svelte",
      type: "Web Framework",
      file: "svelte.png",
    },
    {
      name: "React",
      type: "JavaScript Library",
      file: "react.png",
    },
    {
      name: "Next.js",
      type: "React Framework",
      file: "nextjs.svg",
    },
    {
      name: "Django",
      type: "Web Framework",
      file: "django.png",
    },
    {
      name: "Flask",
      type: "Web Framework",
      file: "flask.png",
    },
    {
      name: "Figma",
      type: "Design Tool",
      file: "figma.png",
    },
    {
      name: "Bootstrap",
      type: "CSS Library",
      file: "bootstrap.svg",
    },
    {
      name: "CSS",
      type: "Design Language",
      file: "css.svg",
    },
    {
      name: "Markdown",
      type: "Markup Language",
      file: "markdown.svg"
    },
    {
      name: "Tailwind CSS",
      type: "CSS Library",
      file: "tailwindcss.png",
    },
    {
      name: "VSCode",
      type: "IDE",
      file: "vscode.png",
    },
    {
      name: "Git",
      type: "Version Control",
      file: "git.png",
    },
    {
      name: "Windows",
      type: "Operating System",
      file: "windows.png",
    },
    {
      name: "Linux",
      type: "Operating System",
      file: "linux.png",
    },
  ];

  return (
    <section className="px-0 py-[2rem] md:py-[4rem] md:px-0" id="skills">
      <h2 className="text-center text-4xl text-white mt-4 mb-2 md:mb-4 font-semibold">
        All my{" "}
        <span className="bg-gradient-to-r from-primary-300 via-primary-450 bg-clip-text to-primary-500 radial text-transparent">
          {" "}
          skills
        </span>
      </h2>
      <div
        className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      >
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            file={skill.file}
            type={skill.type}
            drag={null}
          />
        ))}
      </div>
    </section>
  );
}
