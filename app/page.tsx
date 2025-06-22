"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SvgIcon, BackgroundAnimation } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <BackgroundAnimation />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 mt-16 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Hi, I'm <span className="text-blue-600">Deepu Gupta</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Senior Software Engineer
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Results-driven frontend developer with expertise in React, Next.js, and modern web technologies.
              Passionate about creating performant and user-friendly applications.
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="/about"
                className="hidden md:block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="hidden md:block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Deepu_Gupta_Resume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 hover:scale-105"
              >
                <SvgIcon name="download" className="text-white" size="md" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Enhanced Glow Effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative">
                <Image
                  src="/images/profileImage2.jpg"
                  alt="Deepu Gupta"
                  className="rounded-full border-4 border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  width={400}
                  height={400}
                  priority
                />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
