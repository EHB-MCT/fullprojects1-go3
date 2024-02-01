import context from "./context.js";
import * as utils from "./utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let pageResult = 0;
let choices = [];
let stage = 0;
let rabbitDoodle = document.getElementById("rabbitImage");
let backBtn = document.getElementById("backButton");

window.onclick = mouseClickDown;

setup();
draw();

function setup() {
	context.font = "24px Roboto";
}

function draw() {
	phase();
	//guide();
	requestAnimationFrame(draw);
}
function guide() {
	let max = 40;
	let maxH = 40;
	for (let i = 0; i <= max; i++) {
		for (let j = 0; j <= maxH; j++) {
			if (i == 3 || i == 6 || j == 29 || j == 34) {
				context.strokeStyle = "red";
			} else {
				context.strokeStyle = "black";
			}
			utils.drawLine((width * i) / max, 0, (width * i) / max, height);
			utils.drawLine(0, (height * j) / maxH, width, (height * j) / maxH);
		}
	}
}
function drawMultilineText(text, x, y, maxWidth) {
	let words = text.split(" ");
	let currentLine = "";
	let lineHeight = 50; // Adjust as needed

	for (let i = 0; i < words.length; i++) {
		let testLine = currentLine + words[i] + " ";
		let metrics = context.measureText(testLine);
		let testWidth = metrics.width;

		if (testWidth > maxWidth && i > 0) {
			context.fillText(currentLine, x, y);
			currentLine = words[i] + " ";
			y += lineHeight;
		} else {
			currentLine = testLine;
		}
	}
	context.fillText(currentLine, x, y);
}

function drawStartMenu() {
	//arrows
	// context.beginPath();
	// context.arc(666, 300, 50, 0, -2, true);
	// context.moveTo(686, 275);
	// context.lineTo(716, 300);
	// context.lineTo(738, 275);
	// context.stroke();

	// context.beginPath();
	// context.arc(700, 50, 350, 0.4, (Math.PI * 5) / 16);
	// context.moveTo(910, 300);
	// context.lineTo(895, 341);
	// context.lineTo(930, 352);
	// context.stroke();

	// context.beginPath();
	// context.arc(910, 300, 150, 1.79, 2.4);
	// context.moveTo(830, 415);
	// context.lineTo(800, 401);
	// context.lineTo(788, 420);
	// context.stroke();

	// Wat zie ik in mijn richting?
	highlight("#FF00BB", (width * 13) / 20, (height * 20) / 49, 600);
	context.fillStyle = "black";
	context.font = "50px besides";
	drawMultilineText(
		"Wat zie ik in mijn richting?",
		(width * 19) / 30,
		(height * 23) / 50,
		(width * 3) / 10
	);

	//Welke richting is voor mij?
	highlight("#00E5FF", (width * 19) / 48, (height * 3) / 32, 600);
	context.fillStyle = "black";
	context.font = "50px besides";
	drawMultilineText(
		"Welke richting is voor mij",
		(width * 20) / 48,
		(height * 4) / 32,
		(width * 4) / 10
	);

	//button
	context.fillStyle = "#9A00FF";
	context.fillRect(width / 2 - 80, height / 2 - 25, 160, 50);
	context.font = "30px Roboto";
	context.fillStyle = "white";
	context.fillText("Druk hier", width / 2 - 60, height / 2 + 8);

	//Wat ga ik doen?
	highlight("#43FF00", (width * 3) / 64, (height * 12) / 32, 550);
	context.fillStyle = "black";
	context.font = "50px besides";
	context.fillText("Wat ga ik doen?", (width * 1) / 16, (height * 6) / 14);

	//rabbit image
	rabbitDoodle.style.display = "initial";
	rabbitDoodle.style.position = "absolute";
	rabbitDoodle.style.width = "220px";
	rabbitDoodle.style.bottom = "50px";
	rabbitDoodle.style.left = "277px";
	rabbitDoodle.style.transform = "rotate(28deg)";
}
function phase() {
	if (stage == 0) {
		context.clearRect(0, 0, width, height);
		drawStartMenu();
		backBtn.style.display = "none";
	}
	if (stage == 1) {
		decision1();
	} else if (stage == 2) {
		decision2();
	} else if (stage == 3) {
		decision3();
	} else if (stage == 4) {
		decision4();
	} else if (stage == 5) {
		decision51();
	} else if (stage == 6) {
		decision52();
	} else if (stage == 7) {
		decision61();
	} else if (stage == 8) {
		decision62();
	} else if (stage == "resultPage") {
		console.log(choices);
		// console.log("page" + pageResult);
		choices[0]();
	}
}
function textSelect(mouseX, mouseY, optionA, optionB, ...args) {
	if (
		mouseX > (width * 6) / 40 &&
		mouseX < (width * 19) / 40 &&
		mouseY > (height * 9) / 40 &&
		mouseY < (height * 17) / 40
	) {
		if (args[0]) {
			stage = "resultPage";
			choices.push(optionA);
		} else if (optionA == "nietVerder" || optionA == "bussiness") {
			stage++;
		} else {
			choices.push(optionA);
			stage++;
		}
	} else if (
		mouseX > (width * 25) / 40 &&
		mouseX < (width * 37) / 40 &&
		mouseY > (height * 9) / 40 &&
		mouseY < (height * 17) / 40
	)
		if (args[0]) {
			stage = "resultPage";
			choices.push(optionB);
		} else if (optionB == "verder") {
			stage = 6;
		} else if (optionB == "science") {
			stage = 8;
		} else {
			stage++;
			choices.push(optionB);
		}
}
function backButton() {
	backBtn.style.display = "initial";
	context.strokeStyle = "black";
	context.lineWidth = 6;
	backBtn.style.position = "absolute";
	backBtn.style.width = "100px";
	backBtn.style.bottom = "5%";
	backBtn.style.left = "10vw";
}
function textSelect2(mouseX, mouseY, optionA, optionB, optionC, ...args) {
	if (
		mouseX > (width * 6) / 40 &&
		mouseX < (width * 20) / 40 &&
		mouseY > (height * 8) / 40 &&
		mouseY < (height * 16) / 40
	) {
		if (args[0]) {
			choices.push(optionA);
			stage = "resultPage";
		} else {
			stage++;
			choices.push(optionA);
		}
	} else if (
		mouseX > (width * 23) / 40 &&
		mouseX < (width * 38) / 40 &&
		mouseY > (height * 8) / 40 &&
		mouseY < (height * 17) / 40
	) {
		if (args[0]) {
			choices.push(optionB);
			stage = "resultPage";
		} else {
			stage++;
			choices.push(optionB);
		}
	} else if (
		mouseX > (width * 15) / 40 &&
		mouseX < (width * 29) / 40 &&
		mouseY > (height * 20) / 40 &&
		mouseY < (height * 26) / 40
	) {
		if (args[0]) {
			choices.push(optionC);
			stage = "resultPage";
		} else {
			stage++;
			choices.push(optionC);
		}
	}
}
function textSelect3(
	mouseX,
	mouseY,
	optionA,
	optionB,
	optionC,
	optionD,
	...args
) {
	if (
		mouseX > (width * 5) / 40 &&
		mouseX < (width * 20) / 40 &&
		mouseY > (height * 11) / 40 &&
		mouseY < (height * 16) / 40
	) {
		if (args[0]) {
			stage = "resultPage";
			choices.push(optionA);
		} else {
			stage++;
			choices.push(optionA);
		}
	} else if (
		mouseX > (width * 23) / 40 &&
		mouseX < (width * 37) / 40 &&
		mouseY > (height * 11) / 40 &&
		mouseY < (height * 16) / 40
	) {
		if (args[0]) {
			stage = "resultPage";
			choices.push(optionB);
		} else {
			stage++;
			choices.push(optionB);
		}
	} else if (
		mouseX > (width * 5) / 40 &&
		mouseX < (width * 20) / 40 &&
		mouseY > (height * 23) / 40 &&
		mouseY < (height * 29) / 40
	) {
		if (args[0]) {
			stage = "resultPage";
			choices.push(optionC);
		} else {
			stage++;
			choices.push(optionC);
		}
	} else if (
		mouseX > (width * 23) / 40 &&
		mouseX < (width * 37) / 40 &&
		mouseY > (height * 23) / 40 &&
		mouseY < (height * 29) / 40
	) {
		if (args[0]) {
			stage = "resultPage";
			choices.push(optionD);
		} else {
			stage++;
			choices.push(optionD);
		}
	}
}
function decision1() {
	drawBackground();
	context.fillStyle = "black";

	//question 1
	context.fillStyle = "#00E5FF";
	context.fillRect(
		(width * 6) / 40,
		(height * 17) / 40 - 30,
		(width * 19) / 40 - (width * 6) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";

	drawMultilineText(
		"Ik heb interesse in de latijnse taal en geschiedenis",
		(width * 6) / 40,
		(height * 11) / 40 + 32,
		(width * 19) / 40 - (width * 6) / 40
	);

	//question 2
	context.fillStyle = "#43FF00";
	context.fillRect(
		(width * 10) / 16,
		(height * 5) / 13,
		(width * 37) / 40 - (width * 25) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in het ontdekken van hedendaagse problemen.",
		(width * 25) / 40,
		(height * 11) / 40 + 32,
		(width * 37) / 40 - (width * 25) / 40
	);
}
function decision2() {
	drawBackground();

	//question 3
	context.fillStyle = "#FF8901";
	context.fillRect(
		(width * 6) / 40,
		(height * 22) / 60,
		(width * 20) / 40 - (width * 6) / 40,
		25
	);
	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in de griekse taal, latijnse taal en cultuur, en de hedendaagse impact hiervan.",
		(width * 6) / 40,
		(height * 12) / 40,
		(width * 20) / 40 - (width * 6) / 40
	);

	//question 4
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 23) / 40,
		(height * 22) / 60,
		(width * 38) / 40 - (width * 25) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik ben geinteresseerd in de bussiness en economie in onze samenleving",
		(width * 23) / 40,
		(height * 12) / 40,
		(width * 38) / 40 - (width * 23) / 40
	);

	//question 5
	context.fillStyle = "#43FF00";
	context.fillRect(
		(width * 15) / 40,
		(height * 37) / 60,
		(width * 29) / 40 - (width * 15) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in verschillende talen en culturen en/of een wetenschappelijke kijk in het leven.",
		(width * 15) / 40,
		(height * 20) / 40,
		(width * 29) / 40 - (width * 15) / 40
	);
}
function decision3() {
	drawBackground();
	//question 6
	context.fillStyle = "#00E5FF";
	context.fillRect(
		(width * 5) / 40,
		(height * 22) / 60,
		(width * 20) / 40 - (width * 5) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vraag me af wat economie allemaal inhoudt.",
		(width * 5) / 40,
		(height * 7) / 20,
		(width * 20) / 40 - (width * 5) / 40
	);
	//question 7
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 23) / 40,
		(height * 22) / 60,
		(width * 37) / 40 - (width * 23) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in hoe een bedrijf werkt.",
		(width * 23) / 40,
		(height * 14) / 40,
		(width * 37) / 40 - (width * 23) / 40
	);

	//question 8
	context.fillStyle = "#43FF00";
	context.fillRect(
		(width * 5) / 40,
		(height * 29) / 40 - 25,
		(width * 20) / 40 - (width * 5) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";

	drawMultilineText(
		"Ik heb belangstelling voor de mens en onze samenleving.",
		(width * 5) / 40,
		(height * 25) / 40,
		(width * 20) / 40 - (width * 5) / 40
	);
	//question 9
	context.fillStyle = "#FF8901";
	context.fillRect(
		(width * 23) / 40,
		(height * 29) / 40 - 25,
		(width * 37) / 40 - (width * 23) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in biologie, chemie en/of natuurkunde.",
		(width * 23) / 40,
		(height * 25) / 40,
		(width * 37) / 40 - (width * 23) / 40
	);
}
function decision4() {
	drawBackground();
	//question 10
	context.fillStyle = "#00E5FF";
	context.fillRect(
		(width * 6) / 40,
		(height * 17) / 40 - 30,
		(width * 19) / 40 - (width * 6) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik ben nog niet zeker of ik wil verder studeren.",
		(width * 6) / 40,
		(height * 11) / 40 + 32,
		(width * 19) / 40 - (width * 6) / 40
	);

	//question 11
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 10) / 16,
		(height * 5) / 13,
		(width * 37) / 40 - (width * 25) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik wil graag verder studeren.",
		(width * 25) / 40,
		(height * 13) / 40 + 32,
		(width * 37) / 40 - (width * 25) / 40
	);
}
function decision51() {
	drawBackground();

	//question 12
	context.fillStyle = "#00E5FF";
	context.fillRect(
		(width * 6) / 40,
		(height * 17) / 40 - 30,
		(width * 19) / 40 - (width * 6) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vraag me af hoe ondernemingen en bedrijven werken.",
		(width * 6) / 40,
		(height * 11) / 40 + 32,
		(width * 19) / 40 - (width * 6) / 40
	);
	//question 13
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 10) / 16,
		(height * 5) / 13,
		(width * 37) / 40 - (width * 25) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in verschillende talen en wil me verdiepen in het Nederlands.",
		(width * 25) / 40,
		(height * 11) / 40 + 32,
		(width * 37) / 40 - (width * 25) / 40
	);
}
function decision52() {
	drawBackground();
	//question 14
	context.fillStyle = "#B54AE2";
	context.fillRect(
		(width * 6) / 40,
		(height * 17) / 40 - 30,
		(width * 19) / 40 - (width * 6) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in bussiness en economie",
		(width * 6) / 40,
		(height * 14) / 40 + 32,
		(width * 19) / 40 - (width * 6) / 40
	);
	//question 15
	context.fillStyle = "#00E5FF";
	context.fillRect(
		(width * 10) / 16,
		(height * 5) / 13,
		(width * 37) / 40 - (width * 25) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Mijn interesse ligt in het systematisch onderzoeken van diverse vakgebieden.",
		(width * 25) / 40,
		(height * 11) / 40 + 32,
		(width * 37) / 40 - (width * 25) / 40
	);
}
function decision61() {
	drawBackground();
	//question 16
	context.fillStyle = "#00E5FF";
	context.fillRect(
		(width * 6) / 40,
		(height * 22) / 60,
		(width * 20) / 40 - (width * 6) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Het bestuderen van de menselijke relaties tussen landen in de wereld.",
		(width * 6) / 40,
		(height * 12) / 40,
		(width * 20) / 40 - (width * 6) / 40
	);
	//question 17
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 23) / 40,
		(height * 22) / 60,
		(width * 38) / 40 - (width * 25) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vraag me af hoe ondernemingen en bedrijven werken.",
		(width * 23) / 40,
		(height * 12) / 40,
		(width * 38) / 40 - (width * 23) / 40
	);
	//question 18
	context.fillStyle = "#FF8901";
	context.fillRect(
		(width * 15) / 40,
		(height * 43) / 60,
		(width * 29) / 40 - (width * 15) / 40,
		25
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Het verbeteren van mijn communicatieve vaardigheden.",
		(width * 15) / 40,
		(height * 26) / 40,
		(width * 29) / 40 - (width * 15) / 40
	);
}
function decision62() {
	drawBackground();
	//question 19
	context.fillStyle = "#FF8901";
	context.fillRect(
		(width * 6) / 40,
		(height * 17) / 40 - 30,
		(width * 19) / 40 - (width * 6) / 40,
		30
	);
	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik ben niet afgeschrik van een paar uurtjes extra wiskunde.",
		(width * 6) / 40,
		(height * 11) / 40 + 32,
		(width * 19) / 40 - (width * 6) / 40
	);
	//question 20
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 10) / 16,
		(height * 5) / 13,
		(width * 37) / 40 - (width * 25) / 40,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vind het interessant hoe mensen zich gedragen en hoe onze samenleving werkt.",
		(width * 25) / 40,
		(height * 9) / 40 + 32,
		(width * 37) / 40 - (width * 25) / 40
	);
}
function mouseClickDown(event) {
	const rect = context.canvas.getBoundingClientRect();
	const scaleX = context.canvas.width / rect.width;
	const scaleY = context.canvas.height / rect.height;

	const mouseX = (event.clientX - rect.left) * scaleX;
	const mouseY = (event.clientY - rect.top) * scaleY;

	// start button
	if (
		stage == 0 &&
		mouseY > height / 2 - 25 &&
		mouseY < height / 2 + 25 &&
		mouseX > width / 2 - 80 &&
		mouseX < width / 2 + 80
	) {
		stage++;
	}
	// stages
	else if (stage == 1) {
		textSelect(mouseX, mouseY, result1, result2);
	} else if (stage == 2) {
		textSelect2(mouseX, mouseY, result3, result4, result5);
	} else if (stage == 3) {
		textSelect3(mouseX, mouseY, result6, result7, result8, result9);
	} else if (stage == 4) {
		textSelect(mouseX, mouseY, "nietVerder", "verder");
	} else if (stage == 5) {
		textSelect(mouseX, mouseY, result10, result11, true);
	} else if (stage == 6) {
		textSelect(mouseX, mouseY, "bussiness", "science");
	} else if (stage == 7) {
		textSelect2(mouseX, mouseY, result12, result13, result14, true);
	} else if (stage == 8) {
		textSelect(mouseX, mouseY, result15, result16, true);
	} else if (stage == "resultPage") {
		choices.shift();
	}
	//back button
	if (
		stage != 0 &&
		mouseY > (height * 29) / 40 &&
		mouseY < (height * 34) / 40 &&
		mouseX > (width * 3) / 40 &&
		mouseX < (width * 6) / 40
	) {
		choices.pop();
		stage--;
	}
}
function drawBackground() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);
	backButton();
	context.lineWidth = 1;

	context.fillStyle = "white";
	context.fillRect(100, 70, width - 200, height - 200);

	context.strokeRect(90, 60, width - 180, height - 180);
	context.strokeRect(100, 70, width - 200, height - 200);

	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(90, height - 120);
	context.lineTo(80, height - 100);
	context.lineTo(width - 80, height - 100);
	context.lineTo(width - 90, height - 120);
	context.stroke();
}

function highlight(colour, x, y, w) {
	context.save();
	context.fillStyle = colour;
	context.translate(x, y);
	context.rotate((-2 * Math.PI) / 180);
	context.fillRect(0, 0, w, 80);
	context.restore();
}
function result1() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#43FF00", (width * 1) / 16, (height * 1) / 24, 240);
	context.fillText("Latijn", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je maakt kennis met de Latijnse taal en wordt ondergedompeld in de Grieks-Romeinse wereld.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
}
function result2() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#43FF00", (width * 1) / 16, (height * 5) / 98, (width * 12) / 20);
	context.fillText("Moderne Wetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je krijgt een dieper inzicht in het functioneren en het leven van mensen in gezinnen, bedrijven, gemeenten, landen of staten.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Wat is inkomen en hoe besteed je het? Hoe ontstaat de prijs van een product of dienst?",
		(width * 1) / 14,
		(height * 9) / 16,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert de basisvormen van fysica.",
		(width * 1) / 14,
		(height * 12) / 16,
		(width * 2) / 3
	);
}
function result3() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#CCFF00", (width * 1) / 16, (height * 5) / 98, (width * 7) / 20);
	context.fillText("Klassieke talen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je leert de Latijnse en/of Griekse teksten te begrijpen. Je onderzoekt zowel de taal als de cultuur.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je krijgt inzicht in de invloed van de Grieken en de Romeinen op hedendaagse culturen.",
		(width * 1) / 14,
		(height * 9) / 16,
		(width * 2) / 3
	);
}
function result4() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#CCFF00", (width * 1) / 16, (height * 4) / 98, (width * 12) / 20);
	context.fillText("Economie en organisatie", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je leert over de sociaal-economische realiteit en actualiteit, vanuit het perspectief van de consument, de bedrijven en de overheid.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert ICT toepassen.",
		(width * 1) / 14,
		(height * 19) / 32,
		(width * 2) / 3
	);

	drawMultilineText(
		"Je leert kritisch kijken naar marketing en reclame.",
		(width * 1) / 14,
		(height * 24) / 32,
		(width * 2) / 3
	);

	drawMultilineText(
		"Je verwerft inzicht in betaalmiddelen, budgetbeheer, duurzaamheid, en verwante onderwerpen.",
		(width * 1) / 14,
		(height * 29) / 32,
		(width * 2) / 3
	);
}
function result5() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#CCFF00", (width * 1) / 16, (height * 5) / 98, (width * 7) / 20);
	context.fillText(
		"Moderne talen en wetenschappen",
		width / 14,
		(height * 5) / 48
	);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je onderzoekt hoe mensen door hun taal tot een groep of cultuur behoren.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert communiceren in het Nederlands, Frans en/of Engels.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);

	drawMultilineText(
		"Je leert over literatuur, verhalen en gedichten.",
		(width * 1) / 14,
		(height * 22) / 32,
		(width * 2) / 3
	);

	drawMultilineText(
		"Je onderzoekt wetenschappelijke verschijnselen en ideeën.",
		(width * 1) / 14,
		(height * 27) / 32,
		(width * 2) / 3
	);
}
function result6() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#FF00BB", (width * 1) / 16, (height * 5) / 98, (width * 14) / 20);
	context.fillText("Economische wetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je leert over accounting, recht en internationale handel.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je krijgt een verdiepte vorm van Engels, Frans, Nederlands en geschiedenis.",
		(width * 1) / 14,
		(height * 18) / 32,
		(width * 2) / 3
	);
}
function result7() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#FF00BB", (width * 1) / 16, (height * 4) / 98, (width * 11) / 20);
	context.fillText("Bedrijfswetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je leert over algemene economie en bedrijfswetenschappen",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Daarnaast gaat er veel aandacht naar vlotte communicatie zowel mondeling als schriftelijk in eigen taal maar ook andere.",
		(width * 1) / 14,
		(height * 18) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je wordt eveneens geïntroduceerd in de vakgebieden van human resources, verkoop, logistiek, en andere relevante terreinen.",
		(width * 1) / 14,
		(height * 25) / 32,
		(width * 2) / 3
	);
}
function result8() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#FF00BB", (width * 1) / 16, (height * 4) / 98, (width * 12) / 20);
	context.fillText("Humane wetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je krijgt kennis van de wetenschappelijke benadering van de mens en de maatschappij.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert vanuit een gedragswetenschappelijke invalshoek naar het individu en de samenleving te kijken.",
		(width * 1) / 14,
		(height * 20) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert kritische vragen stellen en omgaan met informatie.",
		(width * 1) / 14,
		(height * 28) / 32,
		(width * 2) / 3
	);
}
function result9() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#FF00BB", (width * 1) / 16, (height * 4) / 98, (width * 11) / 20);
	context.fillText("Natuurwetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je krijgt een uitgebreide vorming biologie,chemie en fysica.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je ontwikkelt vaardigheden in wetenschappelijk denken en voert tevens praktische experimenten uit tijdens practica.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);
}
function result10() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 9) / 20);
	context.fillText("Bedrijfsorganisatie", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool, maar je hebt ook de mogelijkheid om direct aan het werk te gaan.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je ontwikkelt inzicht in micro- en macro-economische aspecten.",
		(width * 1) / 14,
		(height * 19) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert kritisch economische begrippen en hun onderlinge verbanden begrijpen.",
		(width * 1) / 14,
		(height * 24) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je ontwikkelt inzicht in micro- en macro-economische aspecten.",
		(width * 1) / 14,
		(height * 31) / 32,
		(width * 2) / 3
	);
}
function result11() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 10) / 20);
	context.fillText("Taal & communicatie", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool, maar je hebt ook de mogelijkheid om direct aan het werk te gaan.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je verdiept je in taalcommunicatievaardigheden in het Duits, Engels, Frans en Nederlands.",
		(width * 1) / 14,
		(height * 19) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je wordt uitgedaagd op het vlak van de communicatiewetenschappen.",
		(width * 1) / 14,
		(height * 26) / 32,
		(width * 2) / 3
	);
}
function result12() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 12) / 20);
	context.fillText("Economie-wiskunde", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je bestudeert de menselijke relaties binnen een land en tussen landen wereldwijd.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je verdiept je in de wiskunde met 7 uur wiskunde per week.",
		(width * 1) / 14,
		(height * 24) / 32,
		(width * 2) / 3
	);
}
function result13() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 11) / 20);
	context.fillText("Bedrijfswetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert de werking van ondernemingen begrijpen.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert kritisch economische begrippen en hun onderlinge verbanden begrijpen.",
		(width * 1) / 14,
		(height * 23) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je ontwikkelt inzicht in micro- en macro-economische aspecten.",
		(width * 1) / 14,
		(height * 30) / 32,
		(width * 2) / 3
	);
}
function result14() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 12) / 20);
	context.fillText("Economie-moderne talen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je bestudeert de menselijke relaties binnen een land en tussen landen wereldwijd.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je behandelt de problemen en relaties die verband houden met het bedrijfsbeleid.",
		(width * 1) / 14,
		(height * 24) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je leert communicatieve vaardigheden te ontwikkelen.",
		(width * 1) / 14,
		(height * 31) / 32,
		(width * 2) / 3
	);
}
function result15() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 13) / 20);
	context.fillText("Wetenschappen-wiskunde", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je verdiept je in wiskunde met 7 uur per week.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je krijgt vakken zoals aardrijkskunde, biologie, chemie en fysica, waar je feitenmateriaal kritisch gaat analyseren.",
		(width * 1) / 14,
		(height * 24) / 32,
		(width * 2) / 3
	);
}
function result16() {
	rabbitDoodle.style.display = "none";
	context.clearRect(0, 0, width, height);

	context.font = "40pt besides";
	highlight("#00E5FF", (width * 1) / 16, (height * 4) / 98, (width * 11) / 20);
	context.fillText("Humane wetenschappen", width / 14, (height * 5) / 48);

	context.font = "32pt Roboto";
	context.fillText("Wat houdt dit in?", (width * 6) / 14, (height * 2) / 8);

	context.font = "22pt Roboto";
	drawMultilineText(
		"Je wordt klaargestoomd voor de hogeschool.",
		(width * 1) / 14,
		(height * 3) / 8,
		(width * 2) / 3
	);
	drawMultilineText(
		"Je krijgt menswetenschappelijke vakken zoals cultuurwetenschappen en gedragswetenschappen.",
		(width * 1) / 14,
		(height * 17) / 32,
		(width * 2) / 3
	);
}
