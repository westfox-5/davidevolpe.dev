"use client"



import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import BubblePortal from "../BubblePortal";
import { useEffect, useState } from "react";

const Experience = () => {
	// Parallax state
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Parallax factors
	const parallax1 = scrollY * 0.15;
	const parallax2 = scrollY * 0.10;
	const parallax3 = scrollY * 0.18;

	return (
		<>
			<BubblePortal>
				{/* Bolla originale */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 0.6, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					style={{ position: "absolute", top: 60 + parallax1, right: 0, pointerEvents: "none", zIndex: 0 }}
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
			<section id="experience" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
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
			</>
		);
	};

export default Experience;


