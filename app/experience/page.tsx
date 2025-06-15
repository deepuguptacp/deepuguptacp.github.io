"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Paytm",
    logo: "/images/paytm-logo.png",
    roles: [
      {
        title: "Senior Software Engineer",
        company: "Paytm Money",
        period: "Apr 2025 – Present",
        points: [
          "Migrated flows from React to Svelte, improving performance",
          "Leading frontend efforts for the Mutual Funds H5 app across mobile platforms",
          "Building production-ready pages using AI-driven tooling"
        ]
      },
      {
        title: "Software Engineer",
        company: "Paytm Services Pvt Ltd",
        period: "Jun 2024 – Apr 2025",
        points: [
          "Revamped Paytm Gold, growing user engagement significantly",
          "Introduced Daily SIP, resulting in ₹9.5Cr revenue on Akshaya Tritiya",
          "Built merchant flows for Paytm Gold",
          "Worked on critical task for regular MF for KYC Flows"
        ]
      },
      {
        title: "Software Engineer",
        company: "Paytm Payments Bank",
        period: "Jun 2021 – Jun 2024",
        points: [
          "Developed and maintained Netbanking panel",
          "Created reusable UI component libraries",
          "Delivered UI for OAuth and 2FA SDKs"
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen p-8 mt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work Experience</h1>

        <div className="space-y-8">
          {experiences.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: companyIndex * 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src={company.logo}
                    alt={`${company.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {company.title}
                </h2>
              </div>
              <div className="space-y-8">
                {company.roles.map((role, roleIndex) => (
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (companyIndex * 0.2) + (roleIndex * 0.1) }}
                    className="border-l-4 border-blue-600 pl-6 ml-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{role.title}</h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300">{role.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{role.period}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {role.points.map((point, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
