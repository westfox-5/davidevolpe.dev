"use client"

import { useEffect, useState } from "react";

type CiResponse = {
	source: string;
	ci: {
		provider: string;
		branch: string;
		runId: number | null;
		runNumber: number | null;
		status: string;
		conclusion: string;
		htmlUrl: string | null;
		commitSha: string | null;
		commitMessage: string | null;
		triggeredAt: string | null;
		updatedAt: string | null;
		durationSeconds: number | null;
	};
	error?: string;
};

const CiDashboard = () => {
	const [ci, setCi] = useState<CiResponse | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let active = true;
		const load = async () => {
			try {
				setLoading(true);
				const res = await fetch('/api/ci', { cache: 'no-store' });
				const json = await res.json();
				if (active) setCi(json);
			} catch {
				if (active) setCi(null);
			} finally {
				if (active) setLoading(false);
			}
		};
		load();
		const id = setInterval(load, 60_000);
		return () => { active = false; clearInterval(id); };
	}, []);

	return (
		<div className="rounded-xl border border-[var(--foreground-accent)] p-6 bg-[color-mix(in_hsl,_var(--foreground)_6%,_transparent)]/10">
			<div className="flex items-center justify-between flex-wrap gap-4">
				<div>
					<h3 className="text-2xl lg:text-3xl font-semibold">CI/CD</h3>
					<p className="opacity-80 text-base lg:text-lg">Latest github action</p>
				</div>
				<div className="flex items-center gap-3 text-sm lg:text-base">
					{loading ? (
						<span className="px-3 py-1 rounded-md border border-[var(--foreground-accent)]/50">loading…</span>
					) : ci ? (
						<>
							<span className={`px-3 py-1 rounded-md border ${ci.ci.conclusion === 'success' ? 'bg-green-600/30 border-green-400/50' : 'bg-red-600/30 border-red-400/50'}`}>build: {ci.ci.conclusion}</span>
							<span className="px-3 py-1 rounded-md bg-blue-600/30 border border-blue-400/50">status: {ci.ci.status}</span>
							<span className="px-3 py-1 rounded-md bg-yellow-600/30 border border-yellow-400/50">duration: {ci.ci.durationSeconds ? `${Math.floor((ci.ci.durationSeconds) / 60)}m ${ci.ci.durationSeconds % 60}s` : 'n/a'}</span>
						</>
					) : (
						<span className="px-3 py-1 rounded-md border border-red-400/50 bg-red-600/20">error</span>
					)}
				</div>
			</div>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm lg:text-base">
				<div className="rounded-lg border border-[var(--foreground-accent)] p-4">
					<div className="opacity-70">Branch</div>
					<div className="font-semibold">{ci?.ci?.branch ?? 'main'}</div>
				</div>
				<div className="rounded-lg border border-[var(--foreground-accent)] p-4 overflow-hidden">
					<div className="opacity-70">Commit</div>
					<div className="font-mono text-sm truncate">{ci?.ci?.commitSha ?? '—'} · {ci?.ci?.commitMessage ?? '—'}</div>
				</div>
				<div className="rounded-lg border border-[var(--foreground-accent)] p-4">
					<div className="opacity-70">Triggered</div>
					<div>{ci?.ci?.triggeredAt ? new Date(ci.ci.triggeredAt).toLocaleString() + "+02:00" : '—'}</div>
				</div>
			</div>
			{ci?.ci?.htmlUrl ? (
				<div className="mt-4 text-sm">
					<a href={ci.ci.htmlUrl} target="_blank" rel="noopener noreferrer" className="underline">View on GitHub</a>
				</div>
			) : null}
			{ci?.error ? (
				<div className="mt-2 text-sm opacity-70">{ci.error}</div>
			) : null}
		</div>
	);
};

export default CiDashboard;


