"use client";
import Link from "next/link";
import SvgIcon from "../svg-icon/svg-icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/deepuguptacp",
      iconName: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepu-gupta-72493116b/",
      iconName: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://x.com/199deepu",
      iconName: "twitter"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/deepu_._gupta/",
      iconName: "instagram"
    }
  ];

  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Deepu Gupta. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label={social.name}
                >
                  <SvgIcon name={social.iconName} size="md" />
                </a>
              ))}
              {/* Contact Icon */}
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Contact"
              >
                <SvgIcon name="contact" size="md" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 