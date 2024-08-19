"use client";

import { About } from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/components/nav-items";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/progress-bar"; // Import the ProgressBar component
import { motion } from "framer-motion";
import Projects from "@/components/Work";

export default function Home() {
  return (
    <>
      <ProgressBar /> {/* Add the ProgressBar component */}
      <motion.main
        className="progess-bar relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </motion.main>
    </>
  );
}
