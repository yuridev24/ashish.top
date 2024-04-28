"use client";

import { useState, useEffect } from "react";
import firebaseApp from "../../../lib/firebase";
import { useSession, signIn, signOut } from "next-auth/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { AuthButton } from "./AuthButton";
import getGithubData from "./getGithubData";

export const Sign = ({ onSignSubmit }) => {
  onSignSubmit = onSignSubmit || (() => {});
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWriteMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const db = getFirestore(firebaseApp);
      const id = await getGithubData(session?.user?.image);
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
    setLoading(false);
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
              disabled={loading}
              className="md:ml-4 bg-blue-500 flex-auto shadow text-white rounded-full border-y px-4 py-3 w-full md:w-[100px] mt-4 md:m-0 border-transparent font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 dark:focus:ring-offset-slate-900 dark:focus:ring-blue-700"
            >
              Sign
            </button>
          </form>
          <button
            onClick={() => signOut()}
            className="md:ml-4 bg-red-500 flex-auto shadow text-white rounded-full border-y px-4 py-3 w-full md:w-[200px] mt-4 md:m-0 border-transparent font-semibold hover:bg-red-600 dark:hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 dark:focus:ring-offset-slate-900 dark:focus:ring-red-700"
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
