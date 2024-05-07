"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { subscribe } from "./Subscribe";

export const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(
    "You will receive a confirmation email and you may unsubscribe at any time."
  );
  const [success, setSuccess] = useState(false);
  const [emailClass, setEmailClass] = useState("text-white");

  const handleSubmitMessage = (message: any, emailClass: any) => {
    setSubmitMessage(message);
    setEmailClass(emailClass);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await subscribe(data.email);
    const parsedResponse = JSON.parse(response);

    if (parsedResponse.message != "Success") {
      setLoading(false);
      handleSubmitMessage(
        "Something went wrong. Please try again.",
        "text-red-500"
      );
      return;
    }

    setLoading(false);
    handleSubmitMessage(
      "Thanks, check your mailbox to confirm your subscription!",
      "text-green-500"
    );
    setSuccess(true);
  };

  return (
    <header className="flex flex-col justify-center items-center py-4">
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-white font-extrabold">
        Subscribe to newsletter
      </h1>
      <p className="text-lg text-slate-400">
        All the blog news straight to your box!
      </p>
      <section className="mt-3 max-w-md sm:mx-auto sm:px-4">
        <h2 className="sr-only">Sign up for our newsletter</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {success ? (
            <p className={`text-center pr-2 mt-2 ${emailClass}`}>
              {submitMessage}
            </p>
          ) : (
            <>
              <div className="px-2 grow-[9999] basis-64 mt-3">
                <div className="group relative">
                  <img
                    src="/images/icons/email.svg"
                    className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-slate-400"
                  />
                  <input
                    type="email"
                    autoComplete="off"
                    className="shadow rounded-md ring-1 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full focus:outline-none focus:ring-2 bg-slate-700/20 ring-slate-200/20 focus:ring-primary-500 text-white"
                    placeholder="hello@ashishagr.is-a.dev"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
              </div>
              <p className="text-red-500 pt-2 justify-center flex flex-row">
                {(errors.email?.message || "").toString()}
              </p>
              <div className="px-2 grow flex mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-primary-700"
                >
                  Subscribe
                </button>
              </div>
              <p className={`text-center pr-2 mt-2 ${emailClass}`}>
                {submitMessage}
              </p>
            </>
          )}
        </form>
      </section>
    </header>
  );
};
