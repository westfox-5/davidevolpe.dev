"use client";


import { motion } from "framer-motion";
import BubblePortal from "../BubblePortal";
import CiDashboard from "../CiDashboard";
import { useEffect, useState } from "react";


const Ops = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax1 = scrollY * 0.13;
  const parallax2 = scrollY * 0.09;
  const parallax3 = scrollY * 0.16;

  return (
    <>
      <BubblePortal>
        {/* Bolla originale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ position: "absolute", top: -50 + parallax1, right: 0, pointerEvents: "none", zIndex: 0 }}
          className="hidden md:block"
        >
          <div className="bubble-base bubble-md" />
        </motion.div>
        {/* Nuove bolle decorative solo su desktop/tablet, sui bordi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: "absolute", bottom: -100 + parallax2, left: 0, pointerEvents: "none", zIndex: 0 }}
          className="hidden md:block"
        >
          <div className="bubble-base bubble-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: "absolute", bottom: -60 - parallax3, right: 0, pointerEvents: "none", zIndex: 0 }}
          className="hidden md:block"
        >
          <div className="bubble-base bubble-sm" />
        </motion.div>
      </BubblePortal>
      <section id="ops" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
        <CiDashboard />
      </section>
    </>
  );
};

export default Ops;
