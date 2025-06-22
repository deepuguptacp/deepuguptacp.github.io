"use client";
import { useState, useEffect } from "react";

interface SvgIconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const SvgIcon = ({ name, className = "", size = "md" }: SvgIconProps) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(`/svgIcons/${name}.svg`);
        if (response.ok) {
          const svgText = await response.text();
          setSvgContent(svgText);
        } else {
          console.error(`Failed to load SVG: ${name}`);
        }
      } catch (error) {
        console.error(`Error loading SVG ${name}:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSvg();
  }, [name]);

  if (isLoading) {
    return <div className={`${sizeClasses[size]} ${className} animate-pulse bg-gray-200 dark:bg-gray-700 rounded`} />;
  }

  if (!svgContent) {
    return null;
  }

  // Create a wrapper div with the SVG content
  return (
    <div 
      className={`${sizeClasses[size]} ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SvgIcon; 