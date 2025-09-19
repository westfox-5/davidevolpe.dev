import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type FileStat = {
	path: string;
	extension: string;
	lines: number;
	nonEmptyLines: number;
};

const IGNORE_DIRS = new Set(['node_modules', '.git', '.next', '.turbo', 'out', 'dist', 'build']);
const COUNT_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.scss', '.json', '.md']);

async function walkAndCount(dir: string): Promise<FileStat[]> {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const results: FileStat[] = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (IGNORE_DIRS.has(entry.name)) continue;
			// Skip hidden directories
			if (entry.name.startsWith('.')) continue;
			results.push(...await walkAndCount(full));
		} else if (entry.isFile()) {
			const ext = path.extname(entry.name);
			if (!COUNT_EXTS.has(ext)) continue;
			try {
				const content = await fs.readFile(full, 'utf8');
				const lines = content.split(/\r?\n/);
				const nonEmpty = lines.filter(l => l.trim().length > 0).length;
				results.push({ path: full, extension: ext || 'none', lines: lines.length, nonEmptyLines: nonEmpty });
			} catch {
				// ignore unreadable files
			}
		}
	}
	return results;
}

export async function GET() {
	const root = process.cwd();
	const stats = await walkAndCount(root);

	const byExt = stats.reduce((acc, s) => {
		const key = s.extension || 'none';
		if (!acc[key]) acc[key] = { files: 0, lines: 0, nonEmptyLines: 0 };
		acc[key].files += 1;
		acc[key].lines += s.lines;
		acc[key].nonEmptyLines += s.nonEmptyLines;
		return acc;
	}, {} as Record<string, { files: number; lines: number; nonEmptyLines: number }>);

	const total = stats.reduce((acc, s) => {
		acc.files += 1;
		acc.lines += s.lines;
		acc.nonEmptyLines += s.nonEmptyLines;
		return acc;
	}, { files: 0, lines: 0, nonEmptyLines: 0 });

	return NextResponse.json({ root, total, byExt });
}


