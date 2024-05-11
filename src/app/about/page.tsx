"use client";

import Certs from "./sections/certs";
import Intro from "./sections/intro";
import Skills from "./sections/skills";

const aboutpage: any = () => {
  return (
    <div className="px-4 md:px-12 min-h-screen">
      <Intro />
      <Skills />
      <Certs />
      <p className="text-lg text-slate-100 mb-4">
        Can you check out the highlights page? It shows most (but not all :P) of my interviews!
      </p>
      <p className="mt-6 text-slate-500">More content to be added soon. Stay tuned!</p>
    </div>
  );
}

export default aboutpage;