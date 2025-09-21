"use client"


import { User } from "lucide-react";

const About = () => (
	<section id="about" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16">
		<h2 className="text-3xl lg:text-5xl font-bold mb-6 flex items-center gap-3">
			<User className="w-8 h-8 text-[var(--foreground-accent)]" />
			About me
		</h2>
		<div className="px-2 md:px-8">
			<p className="text-lg lg:text-2xl leading-relaxed">
				Software Engineer with strong expertise in backend systems and team leadership.
				Experienced in Java, Spring Boot, and distributed applications. Adept at mentoring,
				Agile workflows, and delivering robust, maintainable solutions in dynamic environments.
			</p>
		</div>
	</section>
);

export default About;


