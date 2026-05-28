import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/sections/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hermit's Arena",
  description: "Everything is made with honor and pride.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        className={`${inter.className} relative min-h-full text-black flex flex-col bg-background`}
      >
        <div className="pointer-events-none absolute inset-0 -z-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Nav></Nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
