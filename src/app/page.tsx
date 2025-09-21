"use client"

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const CiDashboard = dynamic(() => import("../components/CiDashboard"), { ssr: false });
const CodeStats = dynamic(() => import("../components/CodeStats"), { ssr: false });
const About = dynamic(() => import("../components/sections/About"), { ssr: false });
const Skills = dynamic(() => import("../components/sections/Skills"), { ssr: false });
const Projects = dynamic(() => import("../components/sections/Projects"), { ssr: false });
const Experience = dynamic(() => import("../components/sections/Experience"), { ssr: false });
const Education = dynamic(() => import("../components/sections/Education"), { ssr: false });
const Contact = dynamic(() => import("../components/sections/Contact"), { ssr: false });
const Ops = dynamic(() => import("../components/sections/Ops"), { ssr: false });

const Home = () => {
  // Initial focus animation removed; no scaling state needed currently

  // Parallax logic moved to component

  // Mouse tracking moved to component

  // Navbar hide/show logic moved to component

  // CI fetch moved to component

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">

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