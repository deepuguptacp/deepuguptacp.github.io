"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  
  // Only show footer on home page
  if (pathname !== "/") {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper; 