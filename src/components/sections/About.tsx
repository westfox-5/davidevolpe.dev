"use client"


import { motion } from "framer-motion";
import BubblePortal from "../BubblePortal";

const About = () => (
		<>
			<BubblePortal>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					style={{ position: "absolute", top: -60, left: -40, pointerEvents: "none", zIndex: 0 }}
				>
					<div className="bubble-base bubble-lg" />
				</motion.div>
			</BubblePortal>
			<section id="about" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
				<h2 className="text-3xl lg:text-5xl font-bold mb-6">About</h2>
				<p className="text-lg lg:text-2xl leading-relaxed">
					Software Engineer with strong expertise in backend systems and team leadership.
					Experienced in Java, Spring Boot, and distributed applications. Adept at mentoring,
					Agile workflows, and delivering robust, maintainable solutions in dynamic environments.
				</p>
			</section>
		</>
);

export default About;


