import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
// @ts-ignore
import "./globals.css";
import ResponsiveNav from "./components/NavBar/ResponsiveNav";
import Footer from "./components/Footer/Footer";

const font = Poppins({
  weight:['100','300','400','500','700','900','200','600','800'],
  subsets:['latin'],
});

export const metadata: Metadata = {
  title: "EDUFLOW - Learn New Skills",
  description: "Your Ultimate Learning Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
