"use client"



import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Education = () => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const parallax1 = scrollY * 0.12;
	const parallax2 = scrollY * 0.09;
	const parallax3 = scrollY * 0.15;

		return (
			<>
			<section id="education" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
				<h2 className="text-3xl lg:text-5xl font-bold mb-6">Education</h2>
				<div className="rounded-xl border border-[var(--foreground-accent)] p-6">
				<div className="flex items-baseline justify-between">
					<h3 className="text-2xl lg:text-3xl font-semibold">Ca’ Foscari University of Venice</h3>
					<span className="text-base opacity-75">2016 — 2022</span>
				</div>
				<div className="mt-4 grid gap-4">
					<div className="rounded-lg border border-[var(--foreground-accent)] p-4">
						<div className="flex items-baseline justify-between">
							<h4 className="text-xl lg:text-2xl font-semibold">Master Degree in Computer Science</h4>
							<span className="text-sm opacity-75">2020 — 2022</span>
						</div>
						<p className="mt-2 text-base lg:text-lg">Thesis: A Ghidra plugin for native code metrics · Final vote: 108/110</p>
					</div>
					<div className="rounded-lg border border-[var(--foreground-accent)] p-4">
						<div className="flex items-baseline justify-between">
							<h4 className="text-xl lg:text-2xl font-semibold">Bachelor Degree in Computer Science</h4>
							<span className="text-sm opacity-75">2016 — 2019</span>
						</div>
						<p className="mt-2 text-base lg:text-lg">Thesis: Web Application for the Veneto Regional Council · Final vote: 110/110 cum laude</p>
						<p className="mt-1 text-sm opacity-80">Activities: cyberchallenge.it (courses and CTF competitions)</p>
					</div>
				</div>
						</div>
					</section>
				</>
			);
		};

export default Education;


