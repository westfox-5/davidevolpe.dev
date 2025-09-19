"use client"

import { motion } from "framer-motion";

const Experience = () => (
	<section id="experience" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 0.6, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="pointer-events-none absolute -z-10"
			style={{ top: -60, right: -50 }}
		>
			<div className="bubble-base bubble-md" />
		</motion.div>
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
);

export default Experience;


