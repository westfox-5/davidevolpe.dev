"use client"

import { useEffect, useState } from "react";

const Navbar = () => {
	const [isNavHidden, setIsNavHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const currentY = window.scrollY;
			const threshold = 80;
			const delta = 5;

			if (currentY <= threshold) {
				setIsNavHidden(false);
			} else if (currentY > lastScrollY + delta) {
				setIsNavHidden(true);
			} else if (currentY < lastScrollY - delta) {
				setIsNavHidden(false);
			}

			setLastScrollY(currentY);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [lastScrollY]);

	return (
		<>
			<nav className={`fixed top-0 left-0 right-0 z-50 bg-glass transition-transform duration-300 will-change-transform ${isNavHidden ? "-translate-y-full" : "translate-y-0"
				}`
				+ `
        after:block
        after:absolute
        after:bg-[var(--foreground-accent)]
        after:rounded-lg
        after:h-1
        after:w-full
        after:content-[' ']`}>
				<div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
					<a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
						<span className="self-center text-3xl lg:text-4xl font-semibold whitespace-nowrap dark:text-white">Davide Volpe</span>
					</a>

					<div className="md:block md:w-auto text-xl lg:text-xl font-medium">
						<ul className="flex flex-col p-4 md:p-0 rounded-lg md:flex-row rtl:space-x-reverse gap-6">
							<li><a href="#about" className="block py-2 md:p-0">About</a></li>
							<li><a href="#skills" className="block py-2 md:p-0">Skills</a></li>
							<li><a href="#projects" className="block py-2 md:p-0">Projects</a></li>
							<li><a href="#experience" className="block py-2 md:p-0">Experience</a></li>
							<li><a href="#education" className="block py-2 md:p-0">Education</a></li>
							<li><a href="#contact" className="block py-2 md:p-0">Contact</a></li>
							<li><a href="#ops" className="block py-2 md:p-0">Ops & Delivery</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="h-16" />
		</>
	);
};

export default Navbar;


