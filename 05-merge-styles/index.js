const fs = require('fs');
const path = require('path');

const stylesPath = path.join(__dirname, 'styles');
const distPath = path.join(__dirname, 'project-dist');
const bundlePath = path.join(distPath, 'bundle.css');

if (!fs.existsSync(distPath)) {
	fs.mkdirSync(distPath);
}

const filesList = fs.readdirSync(stylesPath);

const cssFilter = filesList.filter(file => path.extname(file) === '.css');

let stylesArr = [];

cssFilter.forEach(file => {
	const filePath = path.join(stylesPath, file);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	stylesArr.push(fileContent);
});

const stylesLine = stylesArr.join('\n');

fs.writeFileSync(bundlePath, stylesLine, 'utf-8');