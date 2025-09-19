"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  // Initial focus animation removed; no scaling state needed currently
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const getParallaxStyle = (factorX: number, factorY: number) => {
    const { innerWidth, innerHeight } = window;
    const normX = (mouse.x / innerWidth) * 2 - 1; // -1 .. 1
    const normY = (mouse.y / innerHeight) * 2 - 1; // -1 .. 1
    const translateX = normX * factorX;
    const translateY = normY * factorY;
    return {
      transform: `translate3d(${translateX}px, ${translateY}px, 0)`
    } as React.CSSProperties;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const threshold = 80; // show navbar near top
      const delta = 5; // minimal movement to toggle

      if (currentY <= threshold) {
        setIsNavHidden(false);
      } else if (currentY > lastScrollY + delta) {
        setIsNavHidden(true);
      } else if (currentY < lastScrollY - delta) {
        setIsNavHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <div>
      {/* Fixed animated background layer */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div style={getParallaxStyle(24, 20)}>
          <div className="bubble-base bubble-xl float-med" style={{ top: "10%", left: "5%" }} />
        </div>
        <div style={getParallaxStyle(-20, 24)}>
          <div className="bubble-base bubble-lg float-med" style={{ top: "35%", right: "10%" }} />
        </div>
        <div style={getParallaxStyle(16, -20)}>
          <div className="bubble-base bubble-md float-med" style={{ bottom: "15%", left: "20%" }} />
        </div>
        <div style={getParallaxStyle(-12, 16)}>
          <div className="bubble-base bubble-sm float-med" style={{ bottom: "5%", right: "20%" }} />
        </div>
        <div style={getParallaxStyle(28, -12)}>
          <div className="bubble-base bubble-lg float-med" style={{ top: "70%", left: "55%" }} />
        </div>
      </div>
      {/* Removed initial focus bubble animation */}

      <nav className={`fixed top-0 left-0 right-0 z-50 bg-glass transition-transform duration-300 will-change-transform ${isNavHidden ? "-translate-y-full" : "translate-y-0"
        }`
        + `
        after:block
        after:absolute
        after:bg-[var(--foreground-accent)]
        after:rounded-lg
        after:h-1
        after:w-full
        after:content-[' ']`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span
              className="self-center text-3xl lg:text-4xl font-semibold whitespace-nowrap dark:text-white"
            >
              Davide Volpe
            </span>
          </a>

          <div
            className="md:block md:w-auto text-xl lg:text-xl font-medium">
            <ul className="flex flex-col p-4 md:p-0 rounded-lg md:flex-row rtl:space-x-reverse gap-6">
              <li>
                <a href="#about" className="block py-2 md:p-0">About</a>
              </li>
              <li>
                <a href="#skills" className="block py-2 md:p-0">Skills</a>
              </li>
              <li>
                <a href="#projects" className="block py-2 md:p-0">Projects</a>
              </li>
              <li>
                <a href="#experience" className="block py-2 md:p-0">Experience</a>
              </li>
              <li>
                <a href="#education" className="block py-2 md:p-0">Education</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 md:p-0">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

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


      {/* About */}
      <section id="about" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute -z-10 w-full"
        >
          <div className="bubble-base bubble-lg" style={{ top: "-60px", left: "-40px" }} />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">About</h2>
        <p className="text-lg lg:text-2xl leading-relaxed">
          Software Engineer with strong expertise in backend systems and team leadership.
          Experienced in Java, Spring Boot, and distributed applications. Adept at mentoring,
          Agile workflows, and delivering robust, maintainable solutions in dynamic environments.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.65, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute -z-10"
          style={{ top: -40, right: -30 }}
        >
          <div className="bubble-base bubble-md" />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3 text-base lg:text-xl">
          {[
            'Java (SE/EE, Spring Boot, Spring Batch)',
            'SQL (Transact-SQL, PL/SQL)',
            'Apache Kafka',
            'Message Queues',
            'Docker',
            'Kubernetes',
            'Helm',
            'GitLab CI/CD',
            'Oracle',
            'MongoDB',
            'Angular',
            'React',
            'Next.js',
            'TypeScript / JavaScript',
            'Python',
            'Unix/Linux',
            'Networking',
            'System architecture',
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)]">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-base lg:text-xl opacity-90">
          {['Problem solving', 'Attention to detail', 'Mentoring & knowledge sharing'].map((soft) => (
            <span key={soft} className="px-3 py-1 rounded-md border border-[var(--foreground-accent)]">
              {soft}
            </span>
          ))}
        </div>
        <div className="mt-6 text-base lg:text-xl opacity-90">
          Certifications: OCP 1Z0-815, 1Z0-819 · Java SE 11 Developer
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute -z-10"
          style={{ bottom: -80, left: -60 }}
        >
          <div className="bubble-base bubble-lg" />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <h3 className="text-2xl lg:text-3xl font-semibold">Battleship (Multiplayer)</h3>
            <p className="mt-2 text-lg opacity-80">Multiplayer version of the classic game. Angular frontend, NodeJS backend, MongoDB.</p>
            <div className="mt-4 flex gap-4 text-base">
              <a href="https://github.com/westfox-5/BattleShip" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <h3 className="text-2xl lg:text-3xl font-semibold">IO-Lego</h3>
            <p className="mt-2 text-lg opacity-80">Android app to control a Lego EV3 robot via colored cells. Java, Android Studio.</p>
            <div className="mt-4 flex gap-4 text-base">
              <a href="https://github.com/westfox-5/Io-Lego" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <h3 className="text-2xl lg:text-3xl font-semibold">GhidraMetrics</h3>
            <p className="mt-2 text-lg opacity-80">Ghidra plugin computing various metrics on native code. Implemented in Java.</p>
            <div className="mt-4 flex gap-4 text-base">
              <a href="https://github.com/westfox-5/GhidraMetrics" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-base">
          More on GitHub: <a href="https://github.com/westfox-5" target="_blank" rel="noopener noreferrer" className="underline">github.com/westfox-5</a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute -z-10"
          style={{ top: -60, right: -50 }}
        >
          <div className="bubble-base bubble-md" />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl lg:text-3xl font-semibold">T.A.S. s.p.a</h3>
              <span className="text-base opacity-75">2024 — Present · Remote</span>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded-lg border border-[var(--foreground-accent)] p-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl lg:text-2xl font-semibold">Software Engineer</h4>
                  <span className="text-sm opacity-75">2024 — Present</span>
                </div>
                <ul className="mt-2 list-disc pl-6 text-base lg:text-lg">
                  <li>Senior Java EE developer in a SCRUM team (multi‑team environment).</li>
                  <li>Financial apps for Instant Payments; maintenance of shared libraries.</li>
                  <li>Spring Boot, Spring Batch, MQs, Apache Kafka, Docker, Kubernetes, Helm, GitLab CI/CD.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl lg:text-3xl font-semibold">Technology Reply</h3>
              <span className="text-base opacity-75">2019 — 2024</span>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded-lg bg-[color-mix(in_hsl,_var(--foreground)_20%,_transparent)]/10 p-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl lg:text-2xl font-semibold">Java Developer, Team Leader</h4>
                  <span className="text-sm opacity-75">2022 — 2024</span>
                </div>
                <ul className="mt-2 list-disc pl-6 text-base lg:text-lg">
                  <li>Led a team of 4; analysis and data model design.</li>
                  <li>Stakeholder meetings, testbook definition, support to UATs.</li>
                  <li>Deployments, maintenance, ticket lifecycle management.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-[var(--foreground-accent)] p-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl lg:text-2xl font-semibold">Analyst Java Developer</h4>
                  <span className="text-sm opacity-75">2021 — 2022</span>
                </div>
                <ul className="mt-2 list-disc pl-6 text-base lg:text-lg">
                  <li>Designed data models based on business requirements.</li>
                  <li>Improved stability, reducing incident tickets by 15%.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-[var(--foreground-accent)] p-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl lg:text-2xl font-semibold">Java Developer</h4>
                  <span className="text-sm opacity-75">2019 — 2021</span>
                </div>
                <ul className="mt-2 list-disc pl-6 text-base lg:text-lg">
                  <li>Developed and maintained PLM software for a major Italian fashion company.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl lg:text-3xl font-semibold">University Internship · Ca’ Foscari University of Venice</h3>
              <span className="text-base opacity-75">2019</span>
            </div>
            <ul className="mt-3 list-disc pl-6 text-lg">
              <li>Web app to handle and visualize graphs from CSV open data using Angular, NodeJS, MongoDB.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute -z-10"
          style={{ bottom: -60, right: -40 }}
        >
          <div className="bubble-base bubble-sm" />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Education</h2>
        <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl lg:text-3xl font-semibold">Ca’ Foscari University of Venice</h3>
            <span className="text-base opacity-75">2016 — 2022</span>
          </div>
          <div className="mt-4 grid gap-4">
            <div className="rounded-lg border border-[var(--foreground-accent)] p-4">
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl lg:text-2xl font-semibold">Master Degree in Computer Science</h4>
                <span className="text-sm opacity-75">2020 — 2022</span>
              </div>
              <p className="mt-2 text-base lg:text-lg">Thesis: A Ghidra plugin for native code metrics · Final vote: 108/110</p>
            </div>
            <div className="rounded-lg border border-[var(--foreground-accent)] p-4">
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl lg:text-2xl font-semibold">Bachelor Degree in Computer Science</h4>
                <span className="text-sm opacity-75">2016 — 2019</span>
              </div>
              <p className="mt-2 text-base lg:text-lg">Thesis: Web Application for the Veneto Regional Council · Final vote: 110/110 cum laude</p>
              <p className="mt-1 text-sm opacity-80">Activities: cyberchallenge.it (courses and CTF competitions)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.65, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute -z-10"
          style={{ top: -40, left: -30 }}
        >
          <div className="bubble-base bubble-md" />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Contact</h2>
        <p className="text-lg lg:text-2xl">Open to collaborations and opportunities. Let&apos;s talk.</p>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <a href="mailto:volpe_davide@outlook.it" className="px-5 py-3 rounded-md bg-[var(--foreground)] text-[var(--background)] text-lg">
            Email me
          </a>
          <a href="https://davidevolpe.dev" className="underline text-lg" target="_blank" rel="noopener noreferrer">Website</a>
          <a href="/files/cv_en.pdf" className="underline text-lg" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
      </section>
    </div>
  );
};

export default Home;