"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {

  const [cvPosition, setCvPosition] = useState({ x: 0, y: 0 });
  const cvRef = useRef<HTMLDivElement | null>(null); // Riferimento al div di destinazione


  useEffect(() => {
    const getCvPosition = () => {
      if (cvRef.current) {
        const rect = cvRef.current.getBoundingClientRect();
        setCvPosition({
          x: rect.left + rect.width / 2, // X centrata
          y: rect.top + rect.height / 2,  // Y centrata
        });
      }
    };

    // Aggiorna la posizione al caricamento iniziale
    getCvPosition();

    // Aggiungi un event listener per ridimensionamento della finestra
    window.addEventListener('resize', getCvPosition);

    return () => {
      window.removeEventListener('resize', getCvPosition);
    };
  }, []);

  return (
    <div>
      <nav className="sticky top-0 backdrop-blur
        after:block
        after:absolute
        after:bg-[var(--foreground-accent)]
        after:rounded-lg
        after:h-1
        after:w-full
        after:content-[' ']">
        <div className="max-w-screen-xl flex items-center justify-between p-4">
          <a href="https://davidevolpe.dev" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-3xl lg:text-4xl font-semibold whitespace-nowrap dark:text-white">
              Davide Volpe
            </span>
          </a>

          <div className="md:block md:w-auto text-xl lg:text-xl font-medium">
            <ul className="flex flex-col p-4 md:p-0 rounded-lg md:flex-row rtl:space-x-reverse">
              <li>
                <a href="/files/cv_en.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 md:p-0">
                  <span>
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

      <div className="flex items-center justify-center">
        <motion.div className="blur-bubble"
          animate={{
            x: ["-100%", "45%", "%"],
            y: ["-20%", "50%", "0%"],
            scaleX: [2, 1.5, 1], // Cambia la scala dell'elemento
          }}
          transition={{
            duration: 10,              // Durata totale di una transizione
            //repeat: Infnity,         // Ripete l'animazione indefinitamente
            //repeatType: "loop",       // Tipo di ripetizione
            ease: "easeInOut",        // Tipo di transizione
            delay: 2,                 // Aggiungi un ritardo singolo per l'animazione
            times: [2, 3, 2, 0],  // Ogni animazione ha un comportamento più casuale
          }}
        ></motion.div>

        <div className="flex flex-col gap-8 pl-10 py-10">
          <div className="font-extrabold text-5xl lg:text-8xl">
            Hello, I&apos;m <br />
            <span className="text-[var(--background)] text-outline">
              Davide
            </span>
          </div>
          <div className="text-3xl lg:text-6xl">
            I am a passionate software developer,
            <br /> specialized in backend development
            <br /> <span className="text-2xl lg:text-4xl">... just look at this ugly website</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full text-center items-center justify-center text-xl lg:text-5xl mt-10 p-8">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline fill-current w-9">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
        </svg>
        &nbsp;
        Website under construction
        &nbsp;
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline fill-current w-9">
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
        </svg>
      </div>

      <div className="h-96"></div>
    </div >
  );
}

export default Home;