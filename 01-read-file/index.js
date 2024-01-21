const fs = require('fs');
const path = require('path');

const txtPath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(txtPath);

readStream.on('data', (chunk) => {
	process.stdout.write(chunk);
});