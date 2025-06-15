"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "DevOps" | "Tools";
  icon?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", level: 95, category: "Frontend", icon: "📜" },
  { name: "React", level: 90, category: "Frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "Frontend", icon: "▲" },
  { name: "TypeScript", level: 90, category: "Frontend", icon: "📘" },
  { name: "Tailwind CSS", level: 60, category: "Frontend", icon: "🎨" },
  { name: "HTML/CSS", level: 90, category: "Frontend", icon: "🌐" },
  
  // Backend
  { name: "Node.js", level: 80, category: "Backend", icon: "🟢" },
  { name: "SQL", level: 70, category: "Backend", icon: "🗄️" },
  
  // Tools
  { name: "VS Code", level: 90, category: "Tools", icon: "💻" },
  { name: "Figma", level: 75, category: "Tools", icon: "🎨" },
  { name: "Jira", level: 80, category: "Tools", icon: "📋" },
  { name: "Git", level: 85, category: "Tools", icon: "📦" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:from-blue-500 group-hover:to-purple-500 transition-colors duration-300"
                  />
                </div>
                
                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 