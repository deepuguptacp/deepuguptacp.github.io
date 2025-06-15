"use client";
import { motion } from "framer-motion";
import Skills from "../components/skills";

const skills = {
  frontend: ["JavaScript", "React.js", "HTML", "CSS", "Next.js", "SCSS"],
  otherTech: ["TypeScript", "Redux", "Git", "GitHub", "C/C++"],
  uiux: ["Responsive design", "Modular components"]
};

export default function About() {
  return (
    <div className="min-h-screen p-8 mt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h1>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Profile Summary</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am a Senior Software Engineer with over 4 years of experience specializing in frontend development and modern web technologies. My expertise lies in building scalable, performant, and user-friendly applications using React, Next.js, and TypeScript. I have a strong foundation in JavaScript and a deep understanding of modern web development practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Throughout my career, I've led the development of complex web applications, focusing on creating intuitive user interfaces and optimizing application performance. I'm particularly skilled in state management, component architecture, and implementing responsive designs that work seamlessly across all devices. My experience with Node.js and SQL allows me to work effectively across the full stack when needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm passionate about writing clean, maintainable code and following best practices in software development. I actively contribute to open-source projects and stay updated with the latest industry trends and technologies. My experience with Cursor's AI-first workflow has enhanced my productivity and problem-solving capabilities, allowing me to deliver high-quality solutions efficiently.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Beyond coding, I enjoy mentoring junior developers, participating in tech communities, and sharing knowledge through technical writing. I believe in continuous learning and am always eager to take on new challenges that push the boundaries of what's possible in web development.
            </p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Education</h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="font-semibold">B.Tech in Computer Science and Engineering, NIT Patna (2017–2021)</p>
            <p>CGPA: 8.02</p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <Skills />
        </div>
      </motion.div>
    </div>
  );
}
