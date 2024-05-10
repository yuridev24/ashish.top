"use client";

import { Skill } from "../../components/ui/Skill";

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
    name: "MySQL",
    type: "Language",
    file: "mysql.svg",
  },
  {
    name: "Firebase",
    type: "Collection of libraries",
    file: "firebase.svg",
  },
  {
    name: "Python",
    type: "Language",
    file: "python.svg",
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
    name: "CSS",
    type: "Design Language",
    file: "css.svg",
  },
  {
    name: "Tailwind CSS",
    type: "CSS Library",
    file: "tailwindcss.png",
  },
];

export default function Skills() {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 mt-4">
        Skills and Certificates
      </h2>
      <p className="text-lg text-slate-100 mb-4">
        Here's the list of my skills:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            file={skill.file}
            type={skill.type}
            drag={null}
            hover={false}
          />
        ))}
      </div>
    </>
  );
}
