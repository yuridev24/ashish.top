import "./globals.css";
import { inter } from "./fonts.js"
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

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
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <NavBar />
          <div className="container mx-auto py-4 px-12 mt-24 content_main">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
