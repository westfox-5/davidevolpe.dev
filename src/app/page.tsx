"use client"

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import CiDashboard from "../components/CiDashboard";
import CodeStats from "../components/CodeStats";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Ops from "../components/sections/Ops";

const Home = () => {
  // Initial focus animation removed; no scaling state needed currently

  // Parallax logic moved to component

  // Mouse tracking moved to component

  // Navbar hide/show logic moved to component

  // CI fetch moved to component

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">

        <AnimatedBackground />
          <Navbar />

          {/* Spacer to offset fixed navbar height */}
          <div className="h-16" />

          <div id="home" className="flex items-center justify-center scroll-mt-16">
            <div className="flex flex-col gap-8 pl-10 py-10 mt-16">
              <div className="font-extrabold text-5xl lg:text-8xl">
                Hello, I&apos;m <br />
                <span className="text-[var(--background)] text-outline">
                  Davide
                </span>
              </div>
              <div className="text-3xl lg:text-6xl">
                I am a passionate software developer,
                <br /> specialized in{" "}
                <span>
                  backend
                </span>
                {" "}development
                <br /> <span className="text-2xl lg:text-4xl">... just look at this ugly website</span>
              </div>
            </div>
          </div>

          <About />

          <Skills />



          <Projects />

          <Experience />

          <Education />

          <Contact />

          <Ops />

    
    </div>
  );
};

export default Home;