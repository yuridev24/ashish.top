"use client";

import { useState } from "react";
import firebaseApp from "../../../lib/firebase";
import { useSession, signIn, signOut } from "next-auth/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Sign = ({ onSignSubmit }) => {
  onSignSubmit = onSignSubmit || (() => {});
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWriteMessage = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore(firebaseApp);
      const messageRef = collection(db, "messages");
      if (message.trim() !== "") {
        await addDoc(messageRef, {
          email: session?.user?.email,
          name: session?.user?.name,
          image: session?.user?.image,
          message: message,
        });
        onSignSubmit({
          email: session?.user?.email,
          name: session?.user?.name,
          image: session?.user?.image,
          message: message,
        });
        window.alert("Comment submitted!");
      } else {
        window.alert("Comment cannot be empty!");
      }
      setMessage("");
    } catch (error) {
      console.error("Error submitting: " + error);
    }
  };
  if (session) {
    return (
      <>
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
      </>
    );
  }
  return (
    <div
      className="text-zinc-300 cursor-pointer"
      onClick={() => signIn("github")}
    >
      <span className="text-blue-500 hover:underline mb-4">Sign in</span> to
      leave a message.
    </div>
  );
};