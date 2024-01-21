const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createWriteStream('./02-write-file/output.txt', { flags: 'a' });

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const questions = [
	"Кто проживает на дне океана?",
	"Желтая губка, малыш без изъяна",
	"Кто побеждает всегда и везде?",
	"Кто также ловок как рыба в воде?"
];

let currentQuestion = 0;
console.log(questions[currentQuestion]);

rl.on('line', (input) => {

	if (input.toLowerCase() === 'exit') {
		console.log('Всего доброго!');
		fileStream.end();
		process.exit();
	}

	fileStream.write(`${input}\n`);
	currentQuestion++;

	if (currentQuestion < questions.length) {
		console.log(questions[currentQuestion]);
	}

	if (currentQuestion > questions.length - 1) {
		console.log('SpongeBob SquarePants!');
	}
});

rl.on('SIGINT', () => {
	console.log('Всего доброго!');
	fileStream.end();
	process.exit();
});