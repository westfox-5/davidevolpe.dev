"use client"

import { motion } from "framer-motion";

const About = () => (
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
);

export default About;


