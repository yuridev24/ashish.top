"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import { CogIcon } from "@heroicons/react/24/outline";
import {motion} from "framer-motion";

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
   async function handleSubmit(e: any) {
     e.preventDefault();
     setIsButtonDisabled(true);
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({
         access_key: process.env.NEXT_PUBLIC_TOKEN,
         from_name: e.target.name.value,
         subject: e.target.subject.value,
         email: e.target.email.value,
         message: e.target.message.value,
       }),
     });
     const result = await response.json();
     if (result.success) {
       setEmailSubmitted(true);
       setIsButtonDisabled(false);
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
          Let&apos;s have a chat! Do you need some help or want to just say hello? Fill out the form and I&apos;ll be with you!
        </p>
        <div className="socials flex flex-row gap-2">
			<motion.div
				initial={{y: 100}}
				animate={{y: 0}}
				className={"transition"}
				whileHover={{scale: "1.1"}}
				whileTap={{scale: "1.05"}}
				transition={{duration: 0.1}}>
				<Link
					href="https://github.com/ashishagarwal2023"
					className="hover:opacity-80 transition duration-200 w-[40px] h-[40px]"
				>
					<Image src={GithubIcon} alt="GitHub Icon" width={40} height={40}/>
				</Link>
			</motion.div>
		</div>
	  </div>
		<div>
			{emailSubmitted ? (
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-6">
						<p className="text-green-500 text-sm mt-2">
							Thank you for your email! I will get back to you soon.
						</p>
					</div>
				</form>
			) : (
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
                className="bg-dark-950 border border-[#33353F] placeholder-[#93A2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
                required
                placeholder="hello@ashishagr.is-a.dev"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block text-sm font-medium mb-2"
              >
                Your name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="bg-dark-950 border border-[#33353F] placeholder-[#93A2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
                required
                placeholder="Ashish Agarwal"
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
                className="bg-dark-950 border border-[#33353F] placeholder-[#93A2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-dark-950 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-primary-500"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? (
                <CogIcon className="animate-spin h-5 w-5 mx-auto" />
              ) : (
                "Submit"
              )}
            </button>
{/*
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={isButtonDisabled}
            >
              Submit
            </button> */}
          </form>
        )}
      </div>
    </section>
  );
};
