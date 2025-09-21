"use client"

import { Mail } from "lucide-react";

const Contact = () => (
			  <section id="contact" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
				  <h2 className="text-3xl lg:text-5xl font-bold mb-6 flex items-center gap-3">
					<Mail className="w-8 h-8 text-[var(--foreground-accent)]" />
					Contact
				  </h2>
				  <div className="px-2 md:px-8">
					  <p className="text-lg lg:text-2xl">Open to collaborations and opportunities</p>
								  <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
															  <a
																  href="mailto:volpe_davide@outlook.it"
																  className="block py-2 transition-colors duration-200 text-xl text-[var(--foreground-accent)] hover:text-white focus:text-white active:text-white active:bg-[var(--foreground-accent)]/70"
															  >
																  Email Me
															  </a>
															  <a
																  href="/files/cv_en.pdf"
																  className="block py-2 transition-colors duration-200 text-xl text-[var(--foreground-accent)] hover:text-white focus:text-white active:text-white active:bg-[var(--foreground-accent)]/70"
																target="_blank"
																rel="noopener noreferrer"
															  >
																  Download CV
															  </a>
								  </div>
				  </div>
			  </section>
);

export default Contact;

