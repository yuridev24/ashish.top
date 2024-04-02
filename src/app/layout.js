import "./globals.css";
import {inter, poppins} from "./fonts.js"

export const metadata = {
  title: "Ashish Agarwal's Portfolio",
  description: "I'm a programmer and a designer. I build things for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
