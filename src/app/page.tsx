"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const motionRef = useRef<HTMLDivElement | null>(null);
  const cvRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLSpanElement | null>(null);
  const backendRef = useRef<HTMLSpanElement | null>(null);

  const [scaleX, setScaleX] = useState(1); // Default scale
  const [scaleY, setScaleY] = useState(1); // Default scale

  const updateTargetPosition = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setTargetPosition({
        x: rect.left + rect.width / 2, // X centrata
        y: rect.top + rect.height / 2, // Y centrata
      });
    }
  };

  useEffect(() => {
    // Aggiorna la posizione iniziale al caricamento
    updateTargetPosition(nameRef);
    setScaleX(1.3);

    // Dopo 2 secondi aggiorna la posizione su "backendRef"
    setTimeout(() => {
      updateTargetPosition(backendRef);
      setScaleX(2.3);
      setScaleY(0.8);

      // Dopo altri 2 secondi aggiorna la posizione su "cvRef"
      setTimeout(() => {
        updateTargetPosition(cvRef);
        setScaleX(0.5);
        setScaleY(0.5);

        // Dopo altri 2 secondi torna alla posizione iniziale
        setTimeout(() => {
          if (motionRef.current) {
            motionRef.current.style.transition = "opacity 2s ease-out";
            motionRef.current.style.opacity = "0";
            setTimeout(() => {
              motionRef.current?.remove();
            }, 2500);
          }
        }, 3000);

      }, 4000);
    }, 3000);

    // Aggiungi un event listener per ridimensionamento della finestra
    const handleResize = () => updateTargetPosition(cvRef);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <motion.div
        ref={motionRef}
        className="blur-bubble 
          fixed
          left-0
          top-0 
          w-screen
          h-screen
          z-10"
        initial={{
          x: targetPosition.x - 100, // Offset per centrare il cerchio
          y: targetPosition.y - 100, // Offset per centrare il cerchio
          scaleX: 1,
          scaleY: 1,
        }}
        animate={{
          x: targetPosition.x - 100, // Offset per centrare il cerchio
          y: targetPosition.y - 100, // Offset per centrare il cerchio
          scaleX: scaleX,
          scaleY: scaleY,
        }}
        transition={{
          duration: 4, // Durata totale di una transizione
          ease: "easeInOut", // Tipo di transizione
          times: [0, 0.5, 1], // Tempi per le diverse scale
        }}
      ></motion.div>

      <nav className="sticky top-0 backdrop-blur
        after:block
        after:absolute
        after:bg-[var(--foreground-accent)]
        after:rounded-lg
        after:h-1
        after:w-full
        after:content-[' ']">
        <div className="max-w-screen-xl flex items-center justify-between p-4">
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
              <li>
                <a href="/files/cv_en.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 md:p-0">
                  <span
                    ref={cvRef}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="inline fill-current w-6 mr-2">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"></path>
                        <path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"></path>
                      </g>
                    </svg>
                    CV
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home" className="flex items-center justify-center scroll-mt-16">
        <div className="flex flex-col gap-8 pl-10 py-10">
          <div className="font-extrabold text-5xl lg:text-8xl">
            Hello, I&apos;m <br />
            <span
              ref={nameRef} // Set nameRef to this span
              className="text-[var(--background)] text-outline"
            >
              Davide
            </span>
          </div>
          <div className="text-3xl lg:text-6xl">
            I am a passionate software developer,
            <br /> specialized in{" "}
            <span
              ref={backendRef} // Set backendRef to this span
            >
              backend
            </span>
            {" "}development
            <br /> <span className="text-2xl lg:text-4xl">... just look at this ugly website</span>
          </div>
        </div>
      </div>


      {/* About */}
      <section id="about" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">About</h2>
        <p className="text-lg lg:text-2xl leading-relaxed">
          Software Engineer with strong expertise in backend systems and team leadership.
          Experienced in Java, Spring Boot, and distributed applications. Adept at mentoring,
          Agile workflows, and delivering robust, maintainable solutions in dynamic environments.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
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
      <section id="projects" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <h3 className="text-2xl lg:text-3xl font-semibold">Battleship (Multiplayer)</h3>
            <p className="mt-2 text-lg opacity-80">Multiplayer version of the classic game. Angular frontend, NodeJS backend, MongoDB.</p>
            <div className="mt-4 flex gap-4 text-base">
              <a href="https://github.com/westfox-5" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <h3 className="text-2xl lg:text-3xl font-semibold">IO-Lego</h3>
            <p className="mt-2 text-lg opacity-80">Android app to control a Lego EV3 robot via colored cells. Java, Android Studio.</p>
            <div className="mt-4 flex gap-4 text-base">
              <a href="https://github.com/westfox-5" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--foreground-accent)] p-6">
            <h3 className="text-2xl lg:text-3xl font-semibold">GhidraMetrics</h3>
            <p className="mt-2 text-lg opacity-80">Ghidra plugin computing various metrics on native code. Implemented in Java.</p>
            <div className="mt-4 flex gap-4 text-base">
              <a href="https://github.com/westfox-5" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-base">
          More on GitHub: <a href="https://github.com/westfox-5" target="_blank" rel="noopener noreferrer" className="underline">github.com/westfox-5</a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
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
      <section id="education" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
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
      <section id="contact" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
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