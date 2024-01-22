const fs = require('fs').promises;
const path = require('path');

async function copyDir(src, dest) {
	await fs.mkdir(dest, {recursive: true});
	const entries = await fs.readdir(src, {withFileTypes: true});

	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);

		if (entry.isDirectory()) {
			await copyDir(srcPath, destPath);
		} else {
			await fs.copyFile(srcPath, destPath);
		};
	};
};

copyDir('./04-copy-directory/files', './04-copy-directory/files-copy');
