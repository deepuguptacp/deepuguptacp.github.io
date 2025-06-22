"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { BackgroundAnimation } from "../components";

const projects = [
  {
    title: "Personal Website",
    description: "Full-stack app using React, Redux, MongoDB",
    technologies: ["React", "Redux", "MongoDB", "Node.js"],
    image: "/images/projects/personal-website.png"
  },
  {
    title: "Speech Emotion Analysis",
    description: "Detected emotions from voice data",
    technologies: ["Python", "Machine Learning", "Audio Processing"],
    image: "/images/projects/speech-emotion.png"
  },
  {
    title: "Neural Machine Translation",
    description: "Image captioning using deep learning",
    technologies: ["Deep Learning", "Computer Vision", "NLP"],
    image: "/images/projects/neural-translation.png"
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my skills and projects.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.png"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-8 mt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <BackgroundAnimation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 