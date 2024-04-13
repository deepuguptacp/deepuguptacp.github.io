"use client";
import Image from "next/image";
import { NavBar } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <NavBar />
      <div className="flex items-center min-h-lvh">
        <div className="">
          <Image
            src="/images/profileImage2.jpeg"
            alt="Vercel Logo"
            className="dark m-10 border-b-2 rounded-full"
            width={300}
            height={350}
            priority
          />
        </div>
        <div>Hello</div>
      </div>
    </main>
  );
}
