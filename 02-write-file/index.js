const fs = require('fs');
const readline = require('readline');

const writeStream = fs.createWriteStream('./02-write-file/text.txt', {flags: 'a'});

const readLine = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const questions = [
	"Приветствую! Кто проживает на дне океана?",
	"Желтая губка, малыш без изъяна!",
	"Кто побеждает всегда и везде?",
	"Кто также ловок как рыба в воде?!"
];

let currentQuestion = 0;
console.log(questions[currentQuestion]);

readLine.on('line', (input) => {

	if (input.toLowerCase() === 'exit') {
		console.log('Всего доброго!');
		writeStream.end();
		process.exit();
	}

	writeStream.write(`${input}\n`);
	currentQuestion++;

	if (currentQuestion < questions.length) {
		console.log(questions[currentQuestion]);
	}

	if (currentQuestion > questions.length - 1) {
		console.log('SpongeBob SquarePants!');
	}
});

readLine.on('SIGINT', () => {
	console.log('Всего доброго!');
	writeStream.end();
	process.exit();
});