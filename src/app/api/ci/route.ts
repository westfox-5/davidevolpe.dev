import { NextResponse } from 'next/server';

type CiStatus = {
	provider: 'github';
	branch: string;
	runId: number | null;
	runNumber: number | null;
	status: 'queued' | 'in_progress' | 'completed' | 'unknown';
	conclusion: 'success' | 'failure' | 'cancelled' | 'skipped' | 'startup_failure' | 'null' | 'unknown';
	htmlUrl: string | null;
	commitSha: string | null;
	commitMessage: string | null;
	triggeredAt: string | null;
	updatedAt: string | null;
	durationSeconds: number | null;
};

export async function GET() {
	const owner = process.env.GITHUB_OWNER;
	const repo = process.env.GITHUB_REPO;
	const token = process.env.GITHUB_TOKEN;
	const branch = process.env.GITHUB_BRANCH || 'main';

	// Mock fallback helper
	const mock: CiStatus = {
		provider: 'github',
		branch,
		runId: 0,
		runNumber: 0,
		status: 'completed',
		conclusion: 'success',
		htmlUrl: null,
		commitSha: 'a1b2c3d',
		commitMessage: 'feat: ops widgets',
		triggeredAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
		updatedAt: new Date().toISOString(),
		durationSeconds: 5 * 60 + 12,
	};

	if (!owner || !repo || !token) {
		return NextResponse.json({ source: 'mock', ci: mock });
	}

	try {
		const url = new URL(`https://api.github.com/repos/${owner}/${repo}/actions/runs`);
		url.searchParams.set('branch', branch);
		url.searchParams.set('per_page', '1');

		const res = await fetch(url.toString(), {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/vnd.github+json',
				'X-GitHub-Api-Version': '2022-11-28',
			},
			// Edge-friendly
			cache: 'no-store',
		});

		if (!res.ok) {
			return NextResponse.json({ source: 'mock', ci: mock, error: `GitHub API ${res.status}` }, { status: 200 });
		}

		const data = await res.json();
		const run = data?.workflow_runs?.[0];
		if (!run) {
			return NextResponse.json({ source: 'mock', ci: mock, error: 'no runs' }, { status: 200 });
		}

		const triggeredAt: string | null = run.created_at ?? null;
		const updatedAt: string | null = run.updated_at ?? null;
		let durationSeconds: number | null = null;
		if (triggeredAt && updatedAt) {
			const start = new Date(triggeredAt).getTime();
			const end = new Date(updatedAt).getTime();
			if (!Number.isNaN(start) && !Number.isNaN(end) && end >= start) {
				durationSeconds = Math.round((end - start) / 1000);
			}
		}

		const ci: CiStatus = {
			provider: 'github',
			branch: run.head_branch ?? branch,
			runId: run.id ?? null,
			runNumber: run.run_number ?? null,
			status: run.status ?? 'unknown',
			conclusion: run.conclusion ?? 'unknown',
			htmlUrl: run.html_url ?? null,
			commitSha: run.head_sha ?? null,
			commitMessage: run.head_commit?.message ?? null,
			triggeredAt,
			updatedAt,
			durationSeconds,
		};

		return NextResponse.json({ source: 'github', ci });
	} catch (err: unknown) {
		return NextResponse.json({ source: 'mock', ci: mock, error: (err as Error).message }, { status: 200 });
	}
}


