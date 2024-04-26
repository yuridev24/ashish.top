"use client";

import { useState } from "react";
import { Messages } from "./Messages";

const msgs = [
  {
    img: "/images/icon.png",
    name: "Ashish Agarwal",
    message: "Test seems to work. Let's go?!",
  },
];

export const Sign = () => {
  const [messages, setMessages] = useState(msgs);
  const [message, setMessage] = useState("");
  const handleSignSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() === "") {
      setMessages([
        {
          img: "/images/icon.png",
          name: "Ashish Agarwal",
          message: message,
        },
        ...messages,
      ]);
      setMessage("");
    }
  }
  return (
    <>
      <div className="md:flex md:flex-row w-full mb-8 text-lg">
        {/* <div className="text-zinc-300">
        Sign in to leave a message
      </div> */}
        <form className="w-full" onSubmit={handleSignSubmit}>
          <input
            type="text"
            className="bg-zinc-700 focus:outline-none focus:ring-[#2ab9c9] focus:ring-2 form-input px-4 py-3 rounded-full w-full md:w-auto"
            id="message"
            placeholder="Leave a message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="md:ml-4 bg-[#2ab9c9] focus:outline-none focus:ring-2 focus:ring-[#134449] px-4 py-3 rounded-full w-full md:w-[100px] mt-4 md:m-0 hover:opacity-80 transition duration-100"
          >
            Sign
          </button>
        </form>
        <button
          className="md:ml-4 bg-[#c92a2a] focus:outline-none focus:ring-2 focus:ring-[#491313] px-4 py-3 rounded-full w-full md:w-[200px] mt-4 md:mt-0 hover:opacity-80 transition duration-100"
        >
          Sign out
        </button>
      </div>
      <Messages messages={messages} />
    </>
  );
}
