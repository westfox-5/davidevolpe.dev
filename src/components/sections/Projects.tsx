"use client"


const Projects = () => (
		<>
		<section id="projects" className="max-w-screen-xl mx-auto px-6 py-16 scroll-mt-16 relative">
			<h2 className="text-3xl lg:text-5xl font-bold mb-6">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="rounded-xl border border-[var(--foreground-accent)] p-6">
					<h3 className="text-2xl lg:text-3xl font-semibold">Battleship (Multiplayer)</h3>
					<p className="mt-2 text-lg opacity-80">Multiplayer version of the classic game. Angular frontend, NodeJS backend, MongoDB.</p>
					<div className="mt-4 flex gap-4 text-base">
						<a href="https://github.com/westfox-5/BattleShip" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
					</div>
				</div>
				<div className="rounded-xl border border-[var(--foreground-accent)] p-6">
					<h3 className="text-2xl lg:text-3xl font-semibold">IO-Lego</h3>
					<p className="mt-2 text-lg opacity-80">Android app to control a Lego EV3 robot via colored cells. Java, Android Studio.</p>
					<div className="mt-4 flex gap-4 text-base">
						<a href="https://github.com/westfox-5/Io-Lego" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
					</div>
				</div>
				<div className="rounded-xl border border-[var(--foreground-accent)] p-6">
					<h3 className="text-2xl lg:text-3xl font-semibold">GhidraMetrics</h3>
					<p className="mt-2 text-lg opacity-80">Ghidra plugin computing various metrics on native code. Implemented in Java.</p>
					<div className="mt-4 flex gap-4 text-base">
						<a href="https://github.com/westfox-5/GhidraMetrics" target="_blank" rel="noopener noreferrer" className="underline">Repo</a>
					</div>
				</div>
			</div>
			<div className="mt-6 text-base">
				More on GitHub: <a href="https://github.com/westfox-5" target="_blank" rel="noopener noreferrer" className="underline">github.com/westfox-5</a>
			</div>
		</section>
	</>
);

export default Projects;


