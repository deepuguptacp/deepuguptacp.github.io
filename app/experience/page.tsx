"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Paytm",
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
          "Built merchant flows for Paytm Gold"
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
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-12">
        {experiences.map((company, companyIndex) => (
          <motion.div
            key={companyIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: companyIndex * 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">{company.title}</h2>
            <div className="space-y-8">
              {company.roles.map((role, roleIndex) => (
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (companyIndex * 0.2) + (roleIndex * 0.1) }}
                  className="border-l-4 border-blue-600 pl-6 ml-4"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{role.title}</h3>
                  <h4 className="text-xl text-gray-700 dark:text-gray-300">{role.company}</h4>
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
    </div>
  );
}
