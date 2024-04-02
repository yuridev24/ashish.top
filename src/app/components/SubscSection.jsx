"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const SubscSection = () => {
  const [subscribed, subscribe] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/subscribe";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      subscribe(true);
    }
  };
  return (
    <section id="subscribe">
        <div className="container w-full justify-center mt-16 md:mt-8">
            <h2 className="text-center text-4xl font-bold text-white mt-4">Want to <span className="text-blue-500">color </span>
<span className="text-red-500">your </span>
<span className="text-yellow-500">inbox</span>?</h2>     
            <h3 className="text-center text-2xl font-bold text-white">Subscribe to my weekly emails and <span className="text-pink-500">color </span>
<span className="text-teal-500">your </span>
<span className="text-orange-500">inbox</span>!</h3>   
            {subscribed ? (
            <motion.p initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} className="text-green-500 text-lg mt-2 text-center">
              Thank you for subscribing!
            </motion.p>
          ) : (
<form className="flex flex-row justify-center mt-4 gap-4" onSubmit={handleSubmit}>
                <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#93A2A9] text-gray-100 text-sm rounded-lg block p-2.5 focus:outline focus:outline-primary-500 w-[400px]"
              required
              placeholder="Enter your email..."
            />
            <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg"
          >
            Subscribe
          </button>
            </form>
          )}
            <p className="text-gray-400 text-sm text-center mt-2">Weekly emails are not guranteed and, in some cases there might be miss of some emails.</p>
        </div>
    </section>
  )
}
