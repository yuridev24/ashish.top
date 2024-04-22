/* eslint-disable @next/next/no-img-element */
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
      name: "SQL",
      type: "Language",
      file: "sqlite.png",
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
      name: "TailwindCSS",
      type: "CSS Framework",
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
      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            className="group hover:bg-blue-700 cursor-pointer flex flex-row items-center justify-center gap-4 px-4 py-2 bg-[#0a0a0a] border border-[#171717]"
            key={index}
          >
            <img
              className="h-auto w-8"
              src={`/images/icons/${skill.file}`}
              alt={skill.name}
            />
            <p className="self-stretch w-[1px] bg-[#171717]"></p>
            <div className="group-hover:text-slate-100 w-full text-white">
              <p>{skill.name}</p>
              <p className="text-[#737373] group-hover:text-slate-200 text-sm">{skill.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
