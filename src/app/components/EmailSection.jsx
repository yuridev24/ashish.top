"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GithubIcon from "../../../public/github-icon.svg";

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
   async function handleSubmit(e) {
     e.preventDefault();
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({
         access_key: process.env.TOKEN,
         name: e.target.name.value,
         email: e.target.email.value,
         message: e.target.message.value,
       }),
     });
     const result = await response.json();
     if (result.success) {
       setEmailSubmitted(true);
     }
   }
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. If you think
          I&apos;d be a good fit for your team, I&apos;d love to hear from you.
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          <i>
            If you cannot send email through the form, feel free to email me (this form is on a monthly limit, so it might not work at all).
          </i>
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/ashishagarwal2023"
            className="hover:opacity-80 transition duration-200"
          >
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#93A2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
              required
              placeholder="hello@ashishagr.is-a.dev"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#93A2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
              required
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            ></label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit
          </button>
          {emailSubmitted && (
            <p className="text-red-500 text-sm mt-2">
              Email part hasn&apos;t been implemented yet, sorry!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
