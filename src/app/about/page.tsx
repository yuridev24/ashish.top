"use client";

import Certs from "./sections/certs";
import Intro from "./sections/intro";
import Media from "./sections/media";
import Skills from "./sections/skills";

const aboutpage: any = () => {
  return (
    <div className="px-4 md:px-12 min-h-screen">
      <Intro />
      <Skills />
      <Certs />
      <Media />

      <p className="mt-6 text-slate-500">More content to be added soon. Stay tuned!</p>
    </div>
  );
}

export default aboutpage;