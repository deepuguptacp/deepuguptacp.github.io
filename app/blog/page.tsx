"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiMozilla } from "react-icons/si";
import Image from "next/image";
import { BackgroundAnimation } from "../components";

// Sample blog posts - you can replace these with your actual blog content
const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Learn how to create performant and scalable web applications using Next.js, React, and modern development practices.",
    content: "Next.js has revolutionized the way we build React applications. With its built-in routing, server-side rendering, and optimization features, it provides an excellent foundation for modern web development...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"],
    image: "/images/blog/nextjs-blog.jpg",
    mdnLinks: [
      { title: "MDN: Next.js Overview", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Nextjs_intro" },
      { title: "MDN: JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ]
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of frontend development.",
    content: "Frontend development is evolving at an unprecedented pace. From new frameworks to innovative tools, developers are constantly adapting to new technologies...",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Frontend", "Trends", "Innovation"],
    image: "/images/blog/frontend-future.jpg",
    mdnLinks: [
      { title: "MDN: HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "MDN: CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ]
  },
  {
    id: 3,
    title: "Optimizing React Performance",
    excerpt: "Best practices and techniques for improving the performance of your React applications.",
    content: "Performance optimization is crucial for providing a great user experience. In React applications, there are several strategies we can employ to ensure optimal performance...",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    image: "/images/blog/react-performance.jpg",
    mdnLinks: [
      { title: "MDN: React Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" },
      { title: "MDN: Web Performance", url: "https://developer.mozilla.org/en-US/docs/Web/Performance" }
    ]
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and practices for building robust applications.",
    content: "TypeScript has become an essential tool for modern JavaScript development. It provides type safety and better developer experience...",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    image: "/images/blog/typescript-practices.jpg",
    mdnLinks: [
      { title: "MDN: TypeScript Overview", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/TypeScript" },
      { title: "MDN: JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ]
  }
];

const categories = ["All", "Web Development", "Technology", "Performance", "Programming"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen p-8 mt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <BackgroundAnimation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Blog
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Thoughts, insights, and tutorials on web development, technology, and software engineering.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Blog Post Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-sm">Blog Image</span>
                  </div>
                )}
              </div>

              {/* Blog Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* MDN Links */}
                {post.mdnLinks && post.mdnLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <SiMozilla className="inline-block text-orange-600 dark:text-orange-400 w-4 h-4" />
                      MDN Resources:
                    </span>
                    {post.mdnLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded hover:underline"
                        onClick={e => e.stopPropagation()}
                      >
                        <SiMozilla className="w-3 h-3" />
                        {link.title.replace('MDN: ', '')}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No posts found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              No blog posts available for the selected category.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                  {selectedPost.category}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span>{new Date(selectedPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* MDN Links in Modal */}
              {selectedPost.mdnLinks && selectedPost.mdnLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <SiMozilla className="inline-block text-orange-600 dark:text-orange-400 w-4 h-4" />
                    MDN Resources:
                  </span>
                  {selectedPost.mdnLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded hover:underline"
                    >
                      <SiMozilla className="w-3 h-3" />
                      {link.title.replace('MDN: ', '')}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 