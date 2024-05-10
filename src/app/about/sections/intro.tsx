import { ProgressBarLink } from "@/components/ProgressBar";

export default function Intro() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        About me
      </h1>
      <p className="text-lg text-white mb-4">
        First of all, hi there. If you're new here, let me introduce myself
        first. My name is{" "}
        <span className="border-b border-b-white hover:border-b-2 cursor-pointer select-none">
          Ashish Agarwal
        </span>{" "}
        and my age is not so far, <strong>actually I am 11 years old!</strong>
      </p>
      <p className="text-lg text-slate-200 mb-4">
        I am a{" "}
        <span className="border-b border-b-orange-400 hover:border-b-2 cursor-pointer select-none">
          front-end web developer
        </span>{" "}
        with a passion for creating beautiful, responsive and interactive
        websites that provide a great user experience. I have experience in
        building websites using modern technologies like{" "}
        <span className="border-b border-b-blue-900 hover:border-b-2 cursor-pointer select-none">
          React
        </span>
        ,{" "}
        <span className="border-b border-b-green-600 hover:border-b-2 cursor-pointer select-none">
          Next.js
        </span>
        ,{" "}
        <span className="border-b border-b-[#08b4d4] hover:border-b-2 cursor-pointer select-none">
          {" "}
          Tailwind CSS
        </span>
        , and more. I am always eager to learn new technologies and improve my
        skills.
      </p>
      <p className="text-lg text-slate-200 mb-4">
        One special thing, I'm also a{" "}
        <span className="border-b border-b-cyan-500 hover:border-b-2 cursor-pointer select-none">
          book author
        </span>
        ! I've authored over 9 books, all about programming. You can find my
        books{" "}
        <a
        target="_blank"
          href="https://www.google.co.in/search?sca_esv=f42f57a008774f06&sca_upv=1&hl=en&sxsrf=ADLYWILtOfgZxxmtwH2Z2JgoP2K9TVTC-w:1715355177685&q=Ashish+Agarwal&stick=H4sIAAAAAAAAAONgVuLVT9c3NCwoMyhPKy8wfcRowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18ixi5XMszsgszlBwTE8sKk_MAQDnxTDmXQAAAA&sa=X&ved=2ahUKEwjUm46AtIOGAxXR2DgGHbuuCSMQy_sGegQIERAG#wptab=si:ACC90nzV8JP_zaHhcn0hzH6XuXM5S5ge7Yr9tDbBfB2Ch1QiWrFn8FqIWwehILJ3EpDSoXC6vqCITrXaTzD-iZSb9oyZOlF_1TGWo4pqUm-t-slCoOl-anJNlDvPwy0MSJWu5W9dc3wSL4QquPd5kICTnadGLhH65g%3D%3D"
          className="border-b border-b-blue-500 hover:border-b-2 cursor-pointer select-none hover:bg-blue-500 hover:text-white transition duration-75"
        >Google</a> or on the <ProgressBarLink className="border-b border-b-blue-400 hover:border-b-2 cursor-pointer select-none" href="/">home</ProgressBarLink> page.
      </p>      
    </>
  );
}