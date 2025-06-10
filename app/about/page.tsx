"use client";
import { motion } from "framer-motion";

const skills = {
  frontend: ["JavaScript", "React.js", "HTML", "CSS", "Next.js", "SCSS"],
  otherTech: ["TypeScript", "Redux", "Git", "GitHub", "C/C++"],
  uiux: ["Responsive design", "Modular components"]
};

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Profile Summary</h2>
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

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Education</h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="font-semibold">B.Tech, NIT Patna (2017–2021)</p>
            <p>CGPA: 8.02</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Other Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.otherTech.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">UI/UX</h3>
            <div className="flex flex-wrap gap-2">
              {skills.uiux.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
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
