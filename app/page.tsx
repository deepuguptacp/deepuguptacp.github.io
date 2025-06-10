"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Deepu Gupta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Results-driven frontend developer with expertise in React, Next.js, and modern web technologies.
              Passionate about creating performant and user-friendly applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/about"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Deepu_Gupta_Resume.pdf"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/images/profileImage2.jpeg"
              alt="Deepu Gupta"
              className="rounded-full border-4 border-blue-600 shadow-xl"
              width={400}
              height={400}
              priority
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
