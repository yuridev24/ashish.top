"use client";

import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../../../lib/firebase";
import Image from "next/image";
import {Sign} from "./Sign";

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
      setMessages(messagesData);
    };

    fetchMessages();
  }, []);

  const handleSignSubmit = (newMessage) => {
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
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
                <h3 className="text-lg font-medium">{message.name}</h3>
                <p className="text-gray-300">{message.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
