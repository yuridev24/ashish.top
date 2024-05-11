"use client";

import { useEffect, useState } from "react";
import { Sign } from "./Sign";

import { getGuestbook } from "./getGuestbook";
import { Guest } from "./Guest";

const loadingLoop = 3;

export const Guestbook = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  
  const fetchMessages = async () => {
    setLoading(true);
    setError(false);
    const msgs = await getGuestbook();
    if (!msgs) {
      setError(true);
    } else {
      setMessages(msgs);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSignSubmit = (newMessage: any) => {
    setMessages((messages) => [newMessage, ...messages]);
  };
  

  return (
    <>
      <Sign onSignSubmit={handleSignSubmit} />

      <div className={`flex flex-col my-4 ${loading ? "gap-2" : "gap-6"}`}>
        {loading
          ? Array.from({ length: loadingLoop }).map((_, index) => (
              <div
                className="gap-6 flex flex-col my-4 animate-pulse"
                key={index}
              >
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
          : !error && (
              <>
                {messages.map((msg, index) => (
                  <Guest message={msg} key={index} index={index} />
                ))}
              </>
            )}
        {error && (
          <div className="text-red-500">
            Failed to fetch from guestbook. Perhaps{" "}
            <span
              className="text-red-400 border-b border-b-red-300 hover:border-b-2 cursor-pointer select-none"
              onClick={fetchMessages}
            >
              try again
            </span>
            ?
          </div>
        )}
      </div>
    </>
  );
}
