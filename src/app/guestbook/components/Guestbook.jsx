"use client";

import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../../../lib/firebase";
import Image from "next/image";
import { Sign } from "./Sign";

const ownerId = "83082760"; // GitHub User ID, https://avatars.githubusercontent.com/u/83082760?v=4&w=48&q=75

export const Guestbook = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const db = getFirestore(firebaseApp);
      const messagesRef = collection(db, "messages");
      const messagesSnapshot = await getDocs(messagesRef);

      const messagesData = [];

      messagesSnapshot.forEach((doc) => {
        const messageData = doc.data();
        messagesData.push(messageData);
      });
      messagesData.sort((a, b) => a.time - b.time);
      setMessages(messagesData);
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
      return "1 minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours === 1) {
      return "1 hour ago";
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days === 1) {
      return "1 day ago";
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months === 1) {
      return "1 month ago";
    } else if (months < 12) {
      return `${months} months ago`;
    } else if (years === 1) {
      return "1 year ago";
    } else {
      return `${years} years ago`;
    }
  };

  return (
    <>
      <Sign onSignSubmit={handleSignSubmit} />
      <div className="gap-6 flex flex-col my-4">
        {messages.map((message, index) => (
          <div className="flex flex-col space-y-4" key={index}>
            <div className="flex items-center space-x-4">
              <Image
                src={message.image}
                alt="Profile Picture"
                className="rounded-full"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-lg font-medium inline">{message.name} </h3>
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
                  {parseTime(message.time)}
                </h2>
                <p className="text-gray-300">{message.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
