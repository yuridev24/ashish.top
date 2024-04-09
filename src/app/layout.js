import "./globals.css";
// import { Metadata } from "next";
import {inter, poppins} from "./fonts.js"

export const metadata = {
  title: "Ashish Agarwal",
  description:
    "I'm a programmer and a book author. I build things for the web at a young age.",
  keywords: [
    "Next.js",
    "React",
    "Portfolio",
    "JavaScript",
    "Python",
    "Programmer",
    "Young",
    "Ashish",
    "Computer Boy",
    "Aligarh",
  ],
  creator: "Ashish Agarwal",
  openGraph: {
    title: "Ashish Agarwal",
    description:
      "I'm a programmer and a book author. I build things for the web at a young age.",
    url: "https://ashishagarwal.is-a.dev",
    siteName: "Ashish Agarwal",
    images: [
      {
        url: "https://ashishagarwal.is-a.dev/meta.png",
        width: 1366,
        height: 443,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}