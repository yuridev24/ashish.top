"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { subscribe } from './Subscribe';

export const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(
    'You will receive a confirmation email and you may unsubscribe at any time.'
  );
  const [emailClass, setEmailClass] = useState("text-white");

  const handleSubmitMessage = (message, emailClass) => { 
  setSubmitMessage(message);
  setEmailClass(emailClass);
  }

  const onSubmit = async (data) => {
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
    handleSubmitMessage('Thanks, check your mailbox to confirm your subscription!', 'text-green-500');
  };

  return (
    <div className="max-w-2xl sm:mx-auto relative overflow-visible py-4 mx-4 my-8 mx-auto flex flex-col justify-center bg-zinc-800 rounded-lg">
      <h3 className="text-2xl md:text-4xl font-bold my-4 text-center text-white">
        Subscribe to my newsletter!
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control w-full px-8 md:px-24 mx-auto"
      >
        <input
          type="email"
          placeholder="Your email"
          className={`focus:outline-none focus:ring-[#2ab9c9] focus:ring-2 form-input px-4 py-3 rounded-full w-full ${
            errors.email ? "input-error" : ""
          } bg-gray-700 text-white`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <p className="text-red-500 pt-2 justify-center flex flex-row">
          {errors.email?.message}
        </p>
        <motion.div
          initial={{ scale: 0.97 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{duration:0.1}}
        >
          <button
            type="submit"
            className="disabled:opacity-60 btn btn-primary my-4 bg-blue-600 rounded-full w-full px-2 py-2 text-white focus:outline-none hover:bg-blue-700 transition duration-300 ease-in-out"
            disabled={loading}
          >
            <label
              htmlFor="submit"
              className="label-text text-white tracking-wide"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </label>
            <input type="submit" id="submit" value="" />
          </button>
        </motion.div>
        <p className={`text-center pr-2 mt-2 ${emailClass}`}>{submitMessage}</p>
      </form>
    </div>
  );
};