"use client"


import { motion } from "framer-motion";
import BubblePortal from "../BubblePortal";

const Contact = () => (
		<>
			<BubblePortal>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 0.65, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					style={{ position: "absolute", top: -40, left: -30, pointerEvents: "none", zIndex: 0 }}
				>
					<div className="bubble-base bubble-md" />
				</motion.div>
			</BubblePortal>
			<section id="contact" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
				<h2 className="text-3xl lg:text-5xl font-bold mb-6">Contact</h2>
				<p className="text-lg lg:text-2xl">Open to collaborations and opportunities</p>
				<div className="mt-6 flex flex-wrap gap-4 items-center">
					<a href="mailto:volpe_davide@outlook.it" className="px-5 py-3 rounded-md bg-[var(--foreground)] text-[var(--background)] text-lg">
						Email Me
					</a>
					<a href="/files/cv_en.pdf" className="px-5 py-3 rounded-md bg-[var(--foreground)] text-[var(--background)] text-lg" target="_blank" rel="noopener noreferrer">
						Download CV
					</a>
				</div>
			</section>
		</>
);

export default Contact;


