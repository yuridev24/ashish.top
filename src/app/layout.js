import "./globals.css";
import {inter, poppins} from "./fonts.js"

export const metadata = {
  title: "Ashish Agarwal",
  description: "I'm a programmer and a designer. I build things for the web at a young age.",
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
