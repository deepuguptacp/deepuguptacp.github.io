"use client";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400/30 dark:border-blue-300/30 rounded-lg"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* New Geometric Shapes */}

      {/* Animated Lines */}
      <motion.div
        className="absolute top-1/3 left-1/6 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Diagonal Lines */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-20 h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30 transform rotate-45"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/2 right-1/3 w-16 h-0.5 bg-gradient-to-r from-purple-400/30 to-pink-400/30 transform -rotate-45"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Triangles */}
      <motion.div
        className="absolute top-1/6 right-1/3 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-blue-400/30 border-r-[12px] border-r-transparent"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/6 left-1/3 w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-purple-400/30 border-r-[8px] border-r-transparent"
        animate={{
          rotate: [360, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hexagons */}
      <motion.div
        className="absolute top-2/3 left-1/5 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Diamonds */}
      <motion.div
        className="absolute top-1/4 left-1/8 w-10 h-10 bg-gradient-to-r from-blue-400/25 to-cyan-400/25 transform rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/8 w-8 h-8 bg-gradient-to-r from-purple-400/25 to-pink-400/25 transform rotate-45"
        animate={{
          rotate: [405, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cross Shapes */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-6 h-1 bg-blue-400/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-1 h-6 bg-blue-400/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Zigzag Lines */}
      <motion.div
        className="absolute top-3/4 left-1/4"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-2 h-2 bg-purple-400/30" />
        <div className="w-2 h-2 bg-purple-400/30 transform translate-x-2 translate-y-2" />
        <div className="w-2 h-2 bg-purple-400/30 transform translate-x-4" />
        <div className="w-2 h-2 bg-purple-400/30 transform translate-x-6 translate-y-2" />
        <div className="w-2 h-2 bg-purple-400/30 transform translate-x-8" />
      </motion.div>

      {/* Pulsing Rings */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 border border-blue-400/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-purple-400/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </>
  );
};

export default BackgroundAnimation; 