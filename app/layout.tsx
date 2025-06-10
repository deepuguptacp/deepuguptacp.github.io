import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";
import ThemeToggle from "./components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepu Gupta - Senior Software Engineer",
  description: "Personal website of Deepu Gupta, a Senior Software Engineer specializing in frontend development",
  keywords: ["Deepu Gupta", "Software Engineer", "Frontend Developer", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <NavBar />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
