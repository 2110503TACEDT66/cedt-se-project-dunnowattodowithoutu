import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";

const anuphan = Anuphan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anuphan.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
