"use client";

import { useState } from "react";
import firebaseApp from "../../../lib/firebase";
import { useSession, signIn, signOut } from "next-auth/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { AuthButton } from "./AuthButton";

export const Sign = ({ onSignSubmit }) => {
  onSignSubmit = onSignSubmit || (() => {});
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getGithubData = async () => {
    try {
      const imageUrl = session?.user?.image;
      if (!imageUrl.startsWith("https://avatars.githubusercontent.com/u/"))
        return "#";
      const regex = /\/u\/(\d+)\?/;
      const match = imageUrl.match(regex);
      const userID = match ? match[1] : null;
      const response = await fetch(`https://api.github.com/user/${userID}`);
      const data = await response.json();
      return data.html_url;
    } catch (error) {
      console.error("Error fetching GitHub data: " + error);
    }
  };

  const handleWriteMessage = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore(firebaseApp);
      const id = await getGithubData();
      const messageRef = collection(db, "messages");
      if (message.trim() !== "") {
        await addDoc(messageRef, {
          name: session?.user?.name,
          image: session?.user?.image,
          message: message,
          time: new Date().getTime(),
          github: id,
        });
        onSignSubmit({
          name: session?.user?.name,
          image: session?.user?.image,
          message: message,
          time: new Date().getTime(),
          github: id,
        });
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting: " + error);
    }
  };
  return (
    <>
      {session ? (
        <div className="md:flex md:flex-row w-full mb-8 text-lg">
          <form className="w-full" onSubmit={handleWriteMessage}>
            <input
              type="text"
              className="bg-zinc-700 focus:outline-none focus:ring-[#2ab9c9] focus:ring-2 form-input px-4 py-3 rounded-full w-full md:w-auto"
              id="message"
              placeholder="Leave a message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
              autoComplete="off"
            />
            <button
              type="submit"
              className="md:ml-4 bg-[#2ab9c9] focus:outline-none focus:ring-2 focus:ring-[#134449] px-4 py-3 rounded-full w-full md:w-[100px] mt-4 md:m-0 hover:opacity-80 transition duration-100"
            >
              Sign
            </button>
          </form>
          <button
            onClick={() => signOut()}
            className="md:ml-4 bg-[#c92a2a] focus:outline-none focus:ring-2 focus:ring-[#491313] px-4 py-3 rounded-full w-full md:w-[200px] mt-4 md:mt-0 hover:opacity-80 transition duration-100"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="md:flex flex-row w-full mb-8 text-lg md:gap-2">
          <AuthButton
            title="Sign in with GitHub"
            file="github"
            onClick={() => signIn("github")}
          />
          <AuthButton
            title="Sign in with Google"
            file="google"
            onClick={() => signIn("google")}
          />
        </div>
      )}
    </>
  );
};
