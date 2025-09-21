"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const bubbleSizes = ["bubble-sm", "bubble-md", "bubble-lg", "bubble-xl"];
function randomSize(i: number) {
  // Per avere sempre la stessa sequenza tra i reload, uso l'indice
  return bubbleSizes[i % bubbleSizes.length];
}

const bubbles = [
  { size: randomSize(0), style: { top: "8%", left: "6%" }, duration: 4, delay: 0 },
  { size: randomSize(1), style: { top: "22%", left: "38%" }, duration: 4.5, delay: 1 },
  { size: randomSize(2), style: { top: "35%", left: "85%" }, duration: 3.5, delay: 2 },
  { size: randomSize(3), style: { top: "60%", left: "55%" }, duration: 4.5, delay: 1.5 },
  { size: randomSize(4), style: { top: "82%", left: "45%" }, duration: 4, delay: 2 },
  { size: randomSize(5), style: { bottom: "12%", right: "18%" }, duration: 3.5, delay: 0.5 },
  { size: randomSize(6), style: { bottom: "28%", right: "70%" }, duration: 4, delay: 1.5 },
  { size: randomSize(7), style: { bottom: "45%", right: "10%" }, duration: 4, delay: 1.2 },
  { size: randomSize(8), style: { bottom: "68%", right: "80%" }, duration: 4, delay: 2 },
  { size: randomSize(9), style: { bottom: "90%", right: "70%" }, duration: 3.5, delay: 2.3 },
];

function getParallaxY(index: number, windowHeight: number, scrollY: number) {
  // Ogni bolla si muove con un fattore diverso per effetto parallasse
  const factors = [0.1, 0.13, 0.30, 0.15, 0.12, 0.09];
  return scrollY * factors[index % factors.length];
}

const FloatingBubbles = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-0 top-0 w-full max-w-full h-[4000px] z-0 overflow-x-hidden"
      style={{ minHeight: '100vh', maxWidth: '100vw', overflowX: 'hidden' }}
    >
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0.5 }}
          animate={{
            y: getParallaxY(i, windowHeight, scrollY),
            opacity: 1,
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: b.duration,
              ease: "easeInOut",
              delay: b.delay,
            },
            opacity: { duration: 1, delay: b.delay },
          }}
          style={{ position: "absolute", ...b.style, pointerEvents: "none" }}
        >
          <div
            className={`bubble-base ${b.size}`}
            style={b.size === "bubble-xs" ? { width: 70, height: 70 } : {}}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
