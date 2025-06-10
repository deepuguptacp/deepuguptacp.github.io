"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Website",
    description: "Full-stack app using React, Redux, MongoDB",
    technologies: ["React", "Redux", "MongoDB", "Node.js"]
  },
  {
    title: "Speech Emotion Analysis",
    description: "Detected emotions from voice data",
    technologies: ["Python", "Machine Learning", "Audio Processing"]
  },
  {
    title: "Neural Machine Translation",
    description: "Image captioning using deep learning",
    technologies: ["Deep Learning", "Computer Vision", "NLP"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 