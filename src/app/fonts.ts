import { Inter, Poppins } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-poppins",
});

// import localFont from "next/font/local";

// const customFont = localFont({ src: "../../public/fonts/intergreek.woff2" });

// export const poppins = customFont;
// export const inter = customFont;