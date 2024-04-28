"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { AuthButton } from "./AuthButton";
import getGithubData from "./getGithubData";

export const Sign = ({ onSignSubmit }) => {
  onSignSubmit = onSignSubmit || (() => {});
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setError] = useState("");

  const handleWriteMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = await getGithubData(session?.user?.image);
      if (message.trim() !== "") {
        fetch("/api/sign", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: session?.user?.name,
            image: session?.user?.image,
            message: message,
            id: id,
          }),
        }).then((res) => res.json())
          .then((data) => {
            if (data.success) {
              onSignSubmit({
                name: session?.user?.name,
                image: session?.user?.image,
                message: message,
                time: new Date().getTime(),
                github: id,
              });
            } else {
              if (data.error === "Rate limited") {
                setError("You are rate limited. Please try again later.");
              } else {
                if(data.error === "Internal Server Error") {
                  setError("Internal Server Error");
                }
              }
            }
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
        <>
          <div className="md:flex md:flex-row w-full text-lg">
            <form className="w-full" onSubmit={handleWriteMessage}>
              <input
                type="text"
                className="bg-zinc-700 focus:outline-none focus:ring-[#2ab9c9] focus:ring-2 form-input px-4 py-3 rounded-full w-full md:w-auto"
                id="message"
                placeholder="Leave a message"
                name="message"
                value={message}
                onChange={(e) => { setMessage(e.target.value); setError("");}}
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
          <p className="w-full mt-4 mb-8 text-red-500">{errorMessage}</p>
        </>
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
