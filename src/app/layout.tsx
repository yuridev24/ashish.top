import "./globals.css";
import { inter } from "./fonts";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ScrollTop } from "@/components/ScrollTop";

import { ProgressBar } from "@/components/ProgressBar";

export const metadata: any = {
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
        url: "https://ashishagr.vercel.app/meta.png",
        alt: "Ashish Agarwal",
        width: 1366,
        height: 443,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar className="fixed h-1 bg-primary-500 dark:bg-primary-800 top-0 z-[999]">
          <main className="flex min-h-screen flex-col bg-dark-950">
            <NavBar />
            <div className="container mx-auto py-4 px-12 mt-16 md:mt-20">
              {children}
            </div>
            <Footer />
            <ScrollTop />
          </main>
        </ProgressBar>
      </body>
    </html>
  );
}
