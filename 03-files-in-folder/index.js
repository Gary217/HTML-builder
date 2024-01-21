const fs = require('fs').promises;
const path = require('path');

async function displayFileInfo() {
	const folderPath = path.join(__dirname, 'secret-folder');
	const files = await fs.readdir(folderPath, { withFileTypes: true });

	for (const file of files) {
		
		if (file.isFile()) {

			const filePath = path.join(folderPath, file.name);

            const fileName = file.name.slice(0, file.name.lastIndexOf('.'));
			const fileStats = await fs.stat(filePath);
			const fileExtension = path.extname(file.name).slice(1);

			console.log(`${fileName} - ${fileExtension} - ${fileStats.size}b`);
		};
	};
};

displayFileInfo();