"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


type Bubble = {
  size: string;
  style: React.CSSProperties;
};

const bubbleSizes = ["bubble-sm", "bubble-md", "bubble-lg", "bubble-xl"];

const bubblePositions = [
  { style: { top: "8%", left: "6%" } },
  { style: { top: "22%", left: "38%" } },
  { style: { top: "35%", left: "85%" } },
  { style: { top: "60%", left: "22%" } },
  { style: { top: "82%", left: "45%" } },
  { style: { bottom: "12%", right: "18%" } },
  { style: { bottom: "28%", right: "70%" } },
  { style: { bottom: "45%", right: "10%" } },
  { style: { bottom: "68%", right: "80%" } },
  { style: { bottom: "90%", right: "70%" } },
];


// Parallasse inversa solo durante lo scroll
function getParallaxY(index: number, scrollDelta: number) {
  // Fattori positivi per muovere le bolle nel senso opposto allo scroll, più veloci
  const factors = [0.7, 0.5, 0.9, 0.6, 0.4, 0.52, 0.44, 0.64, 0.56, 0.76];
  return scrollDelta * factors[index % factors.length];
}




const FloatingBubbles = () => {
  // Stato per le bolle random
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDelta, setScrollDelta] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Genera le bolle random solo lato client
    setBubbles(
      bubblePositions.map((pos) => ({
        size: bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)],
        ...pos,
      }))
    );
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDelta((window.scrollY - lastScrollY) * 20 * -1);
      setLastScrollY(window.scrollY);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setScrollDelta(0), 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-0 top-0 w-full max-w-full h-[5100px] z-0 overflow-x-hidden"
      style={{ minHeight: '100vh', maxWidth: '100vw', overflowX: 'hidden' }}
    >
      {mounted && bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0.5 }}
          animate={{
            y: getParallaxY(i, scrollDelta),
            opacity: 1,
          }}
          transition={{
            y: { type: "tween", duration: 1 },
            opacity: { duration: 1 },
          }}
          style={{ position: "absolute", ...b.style, pointerEvents: "none" }}
        >
          <div
            className={`bubble-base ${b.size}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
