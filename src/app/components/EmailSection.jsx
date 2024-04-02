"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GithubIcon from "../../../public/github-icon.svg";

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };
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
            Note: the contact form needs to be fixed yet, you can email me
            instead for any questions.
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
              placeholder="code.with.aasheesh@gmail.com"
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
              Email part hasn't been implemented yet, sorry!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
