"use client"

import { motion } from "framer-motion";

const hardSkills = [
	'Java (SE/EE, Spring Boot, Spring Batch)',
	'SQL (Transact-SQL, PL/SQL)',
	'Apache Kafka',
	'Message Queues',
	'Docker',
	'Kubernetes',
	'Helm',
	'GitLab CI/CD',
	'Oracle',
	'MongoDB',
	'Angular',
	'React',
	'Next.js',
	'TypeScript / JavaScript',
	'Python',
	'Unix/Linux',
	'Networking',
	'System architecture',
];

const softSkills = ['Problem solving', 'Attention to detail', 'Mentoring & knowledge sharing'];

const Skills = () => (
	<section id="skills" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 0.65, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="pointer-events-none absolute -z-10"
			style={{ top: -40, right: -30 }}
		>
			<div className="bubble-base bubble-md" />
		</motion.div>
		<h2 className="text-3xl lg:text-5xl font-bold mb-6">Skills</h2>
		<div className="flex flex-wrap gap-3 text-base lg:text-xl">
			{hardSkills.map((skill) => (
				<span key={skill} className="px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)]">
					{skill}
				</span>
			))}
		</div>
		<div className="mt-6 flex flex-wrap gap-3 text-base lg:text-xl opacity-90">
			{softSkills.map((soft) => (
				<span key={soft} className="px-3 py-1 rounded-md border border-[var(--foreground-accent)]">
					{soft}
				</span>
			))}
		</div>
		<div className="mt-6 text-base lg:text-xl opacity-90">
			Certifications: OCP 1Z0-815, 1Z0-819 · Java SE 11 Developer
		</div>
	</section>
);

export default Skills;


