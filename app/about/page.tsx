"use client";
import { motion } from "framer-motion";

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
              Results-driven frontend developer skilled in JavaScript, React, Next.js, HTML, CSS, and Svelte.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Strong understanding of UI/UX, responsive design, and performance optimization.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Experienced using Cursor's AI-first workflow for rapid development and debugging.
            </p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Education</h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="font-semibold">B.Tech, NIT Patna (2017–2021)</p>
            <p>CGPA: 8.02</p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Other Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.otherTech.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-200 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">UI/UX</h3>
            <div className="flex flex-wrap gap-2">
              {skills.uiux.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
