"use client";

import { Guestbook } from "./components/Guestbook";
import { SessionProvider } from "next-auth/react";

const GuestBookPage = () => {
  return (
    <>
      <SessionProvider>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">Sign my guestbook</h1>
        <Guestbook />
      </SessionProvider>
    </>
  ); 
}
export default GuestBookPage;