"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sign } from "./Sign";

import {motion} from "framer-motion";
import { getGuestbook } from "./getGuestbook";

const ownerId = "83082760"; // GitHub User ID, https://avatars.githubusercontent.com/u/83082760?v=4&w=48&q=75

const loadingLoop = 3;

export const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setMessages(await getGuestbook());
      setLoading(false);
    };

    fetchMessages();
  }, []);

  const handleSignSubmit = (newMessage) => {
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  const parseTime = (timestamp) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (seconds < 60) {
      return "Just now";
    } else if (minutes === 1) {
      return "A minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours === 1) {
      return "An hour ago";
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days === 1) {
      return "A day ago";
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months === 1) {
      return "A month ago";
    } else if (months < 12) {
      return `${months} months ago`;
    } else if (years === 1) {
      return "A year ago";
    } else {
      return `${years} years ago`;
    }
  };

  const getTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <>
      <Sign onSignSubmit={handleSignSubmit} />

      <div className={`flex flex-col my-4 ` + (loading ? "gap-2" : "gap-6")}>
        {loading ? (
          Array.from({ length: loadingLoop }).map((_, index) => (
            <div className="gap-6 flex flex-col my-4 animate-pulse" key={index}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-300 rounded-full w-12 h-12"></div>
                  <div>
                    <h1 className="w-40 h-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-2 mt-2 mb-1 w-96"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-2 my-1 w-[300px]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            {messages.map((message, index) => (
              <motion.div
                className="flex flex-col space-y-4"
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                <div className="flex items-center space-x-4">
                  <a
                    href={message.github}
                    target={
                      message.github.startsWith("https://github.com/")
                        ? "_blank"
                        : ""
                    }
                  >
                    <Image
                      src={message.image}
                      alt="Profile Picture"
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                  </a>
                  <div>
                    <a
                      href={message.github}
                      target={
                        message.github.startsWith("https://github.com/")
                          ? "_blank"
                          : ""
                      }
                      className="text-lg font-medium inline cursor-pointer hover:text-[#1d9bf0] transition duration-75"
                    >
                      {message.name}{" "}
                    </a>
                    {message.image.startsWith(
                      `https://avatars.githubusercontent.com/u/${ownerId}`
                    ) && (
                      <>
                        <Image
                          src="/images/icons/verified.svg"
                          width={22}
                          height={22}
                          alt="Ashish Agarwal"
                          className="inline mr-1 transform translate-y-[-2px]"
                        />
                        <span className="text-[#1d9bf0]">Creator </span>
                      </>
                    )}
                    <h2 className="text-base font-medium text-gray-400 inline">
                      {parseTime(message.time)}{" "}
                      <span className="hidden md:inline text-xs text-gray-500">
                        ~ {getTime(message.time)}
                      </span>
                    </h2>
                    <p className="text-gray-300">{message.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
