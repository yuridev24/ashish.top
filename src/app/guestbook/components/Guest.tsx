"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ownerId = "83082760"; // GitHub User ID, https://avatars.githubusercontent.com/u/83082760?v=4&w=48&q=75

const parseTime = (timestamp: number) => {
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
    } else if (days === 1) {
      return "A day ago";
    } else if (days <= 6) {
      return `${days} days ago`;
    } else if (days <= 13) {
      return "A week ago";
    } else if (days <= 27) {
      const weeks = Math.floor(days / 7);
      return `${weeks} weeks ago`;
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
const getTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "numeric" as const,
    minute: "numeric" as const,
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};

export const Guest = ({ message, index }: any) => {
  return (
    <motion.div
      className="flex flex-col space-y-4"
      key={index}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ delay: index * 0.1, duration: 0.2 }}
    >
      <div className="flex items-center space-x-4">
        <a
          href={
            message.github.startsWith("https://github.com")
              ? message.github
              : undefined
          }
          target={
            message.github.startsWith("https://github.com/")
              ? "_blank"
              : undefined
          }
        >
          <Image
            src={message.image}
            alt="Profile Picture"
            className="rounded-full hidden md:block"
            width={48}
            height={48}
          />
        </a>
        <div>
          <a
            href={
              message.github.startsWith("https://github.com")
                ? message.github
                : undefined
            }
            target={
              message.github.startsWith("https://github.com/")
                ? "_blank"
                : undefined
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
  );
};
