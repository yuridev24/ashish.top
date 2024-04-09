import "./globals.css";
import Head from 'next/head';
import {inter, poppins} from "./fonts.js"

export const metadata = {
  title: "Ashish Agarwal",
  description:
    "I'm a programmer and a book author. I build things for the web at a young age.",
  image: "/meta.png",
  themeColor: "rgb(18, 18, 18)",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1366" />{" "}
        <meta property="og:image:height" content="463" />{" "}
        <meta name="theme-color" content={metadata.themeColor} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}