"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 border border-[var(--foreground-accent)] shadow-lg backdrop-blur-md text-[var(--foreground-accent)] transition-all duration-200 hover:bg-[var(--foreground-accent)]/80 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--foreground-accent)] active:bg-[var(--foreground-accent)] active:text-white ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{boxShadow: '0 2px 16px 0 rgba(0,150,204,0.10), 0 1.5px 8px 0 rgba(0,150,204,0.10), 0 1px 8px 0 rgba(255,255,255,0.10)'}}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
