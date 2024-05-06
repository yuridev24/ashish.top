import { Inter, Poppins } from 'next/font/google'

export const inter: any = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins: any = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-poppins",
});