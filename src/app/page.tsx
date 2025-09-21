"use client"


import dynamic from "next/dynamic";
import Separator from "../components/Separator";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const About = dynamic(() => import("../components/sections/About"), { ssr: false });
const Skills = dynamic(() => import("../components/sections/Skills"), { ssr: false });
const Projects = dynamic(() => import("../components/sections/Projects"), { ssr: false });
const Experience = dynamic(() => import("../components/sections/Experience"), { ssr: false });
const Education = dynamic(() => import("../components/sections/Education"), { ssr: false });
const Contact = dynamic(() => import("../components/sections/Contact"), { ssr: false });
const Ops = dynamic(() => import("../components/sections/Ops"), { ssr: false });

const Home = () => {

  return (
  <div className="relative w-full overflow-x-hidden">

          <Navbar />

          {/* Spacer to offset fixed navbar height */}
          <div className="h-16" />



          <div id="home" className="flex flex-col items-center justify-center scroll-mt-16 w-full">
            <div className="flex flex-col items-center justify-center gap-8 py-10 mt-16 w-full">
              <div className="font-extrabold text-6xl lg:text-8xl text-center">
                Hello, I&apos;m <br />
                <span className="text-[var(--background)] text-outline">
                  Davide
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-3xl lg:text-6xl font-bold">Backend Engineer</span>
                <span className="block text-3xl lg:text-6xl font-bold">System & Infrastructure Geek</span>
              </div>
            </div>
            <span className="block text-2xl lg:text-4xl mt-4 text-gray-400 font-normal text-center w-full px-10">
              Building robust APIs, automating workflows, and loving the art of scalable, reliable systems.
            </span>
          </div>

          <About />
          <Separator />

          <Skills />
          <Separator />

          <Projects /> 
          <Separator />         

          <Experience />
          <Separator />

          <Education />
          <Separator />

          <Contact />
          <Separator />

          <Ops />
    </div>
  );
};

export default Home;