"use client"

import { useEffect, useMemo, useState } from "react";

type Stats = {
	root: string;
	total: { files: number; lines: number; nonEmptyLines: number };
	byExt: Record<string, { files: number; lines: number; nonEmptyLines: number }>;
};

const CodeStats = () => {
	const [stats, setStats] = useState<Stats | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let active = true;
		const load = async () => {
			try {
				setLoading(true);
				const res = await fetch('/api/codestats', { cache: 'no-store' });
				const json = await res.json();
				if (!res.ok) throw new Error('failed');
				if (active) { setStats(json); setError(null); }
			} catch (e: unknown) {
				if (active) setError((e as Error).message);
			} finally {
				if (active) setLoading(false);
			}
		};
		load();
		return () => { active = false; };
	}, []);

	const topExts = useMemo(() => {
		if (!stats) return [] as Array<[string, { files: number; lines: number; nonEmptyLines: number }]>;
		return Object.entries(stats.byExt)
			.sort((a, b) => b[1].nonEmptyLines - a[1].nonEmptyLines)
			.slice(0, 6);
	}, [stats]);

	return (
		<div className="rounded-xl border border-[var(--foreground-accent)] p-6 bg-[color-mix(in_hsl,_var(--foreground)_6%,_transparent)]/10">
			<div className="flex items-center justify-between flex-wrap gap-4">
				<div>
					<h3 className="text-2xl lg:text-3xl font-semibold">Code Stats</h3>
					<p className="opacity-80 text-base lg:text-lg">Conteggio linee per estensione</p>
				</div>
				{loading ? (
					<span className="px-3 py-1 rounded-md border border-[var(--foreground-accent)]/50">loading…</span>
				) : error ? (
					<span className="px-3 py-1 rounded-md border border-red-400/50 bg-red-600/20">error</span>
				) : (
					<div className="flex items-center gap-3 text-sm lg:text-base">
						<span className="px-3 py-1 rounded-md bg-green-600/30 border border-green-400/50">files: {stats?.total.files}</span>
						<span className="px-3 py-1 rounded-md bg-blue-600/30 border border-blue-400/50">lines: {stats?.total.lines}</span>
						<span className="px-3 py-1 rounded-md bg-yellow-600/30 border border-yellow-400/50">non-empty: {stats?.total.nonEmptyLines}</span>
					</div>
				)}
			</div>

			{!loading && !error && (
				<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm lg:text-base">
					{topExts.map(([ext, v]) => (
						<div key={ext} className="rounded-lg border border-[var(--foreground-accent)] p-4">
							<div className="flex items-center justify-between">
								<div className="font-semibold">{ext || 'none'}</div>
								<div className="opacity-70">{v.files} files</div>
							</div>
							<div className="mt-1">lines: {v.lines}</div>
							<div className="opacity-80">non-empty: {v.nonEmptyLines}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CodeStats;


