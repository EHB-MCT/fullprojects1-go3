import context from "./context.js";
import * as utils from "./utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let mouseX = 0;
let mouseY = 0;
let choices = [];
let stage = 0;
var rabbitDoodle = document.getElementById("rabbitImage");

window.onmousemove = mousePos;
window.onclick = mouseClickDown;

setup();
draw();

function setup() {
	context.font = "24px Roboto";
	drawStartMenu();
}

function draw() {
	phase();
	guide();
	backButton();
	requestAnimationFrame(draw);
}
function guide() {
	let max = 40;
	let maxH = 40;
	for (let i = 0; i <= max; i++) {
		for (let j = 0; j <= maxH; j++) {
			if (i == 6 || i == 19 || j == 7 || j == 16 || i == 25 || i == 37) {
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
	// context.fillText("richting?", (width * 22) / 30, (height * 53) / 100);

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
	// context.fillText("voor mij?", (width * 26) / 50, (height * 9) / 50);

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

	//rabit image
	rabbitDoodle.style.position = "absolute";
	rabbitDoodle.style.width = "220px";
	rabbitDoodle.style.bottom = "50px";
	rabbitDoodle.style.left = "277px";
	rabbitDoodle.style.transform = "rotate(28deg)";
}
function phase() {
	if (stage == 1) {
		decision1();
	} else if (stage == 2) {
		decision2();
	} else if (stage == 3) {
		decision3();
	} else if (stage == 4) {
		decision4();
	}
}
function textSelect(mouseX, mouseY, optionA, optionB) {
	if (
		mouseX > (width * 6) / 40 &&
		mouseX < (width * 19) / 40 &&
		mouseY > (height * 9) / 40 &&
		mouseY < (height * 17) / 40
	) {
		stage++;
		choices.push(optionA);
	} else if (
		mouseX > (width * 25) / 40 &&
		mouseX < (width * 37) / 40 &&
		mouseY > (height * 9) / 40 &&
		mouseY < (height * 17) / 40
	) {
		stage++;
		choices.push(optionB);
	}
}
function backButton() {
	context.fillRect(0, (height * 9) / 10, width / 10, height);
}
function textSelect2(mouseX, mouseY, optionA, optionB, optionC) {
	if (
		mouseX > (width * 3) / 19 &&
		mouseX < (width * 3) / 19 + 510 &&
		mouseY > (height * 2) / 9 &&
		mouseY < (height * 2) / 9 + 25
	) {
		stage++;
		choices.push(optionA);
	} else if (
		mouseX > (width * 47) / 80 &&
		mouseX < width / 2 &&
		mouseY > (height * 4) / 14 &&
		mouseY < (height * 3) / 5
	) {
		stage++;
		choices.push(optionB);
	} else if (
		mouseX > (width * 2) / 7 &&
		mouseX < (width * 5) / 7 &&
		mouseY > (height * 4) / 7 &&
		mouseY < (height * 5) / 7
	) {
		stage++;
		choices.push(optionC);
	}
}
function textSelect3(mouseX, mouseY, optionA, optionB, optionC, optionD) {
	if (
		mouseX > width / 8 &&
		mouseX < width / 2 &&
		mouseY > (height * 2) / 9 &&
		mouseY < (height * 4) / 9
	) {
		stage++;
		choices.push(optionA);
	} else if (
		mouseX < width &&
		mouseX > width / 2 &&
		mouseY > (height * 2) / 9 &&
		mouseY < (height * 4) / 9
	) {
		stage++;
		choices.push(optionB);
	}
	if (
		mouseX > width / 8 &&
		mouseX < width / 2 &&
		mouseY > (height * 6) / 9 &&
		mouseY < (height * 8) / 9
	) {
		stage++;
		choices.push(optionC);
	} else if (
		mouseX < width &&
		mouseX > width / 2 &&
		mouseY > (height * 6) / 9 &&
		mouseY < (height * 8) / 9
	) {
		stage++;
		choices.push(optionD);
	}
}
function decision1() {
	drawBackground();
	context.fillStyle = "black";

	//question 1
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 3) / 19, (height * 5) / 13, 480, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText("Ik heb interesse in de", width / 5, (height * 18) / 56);
	context.fillText(
		"in de latijnse taal en geschiedenis",
		(width * 3) / 19,
		(height * 6) / 16
	);

	//question 2
	context.fillStyle = "#43FF00";
	context.fillRect((width * 10) / 16, (height * 5) / 13, 425, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText("Ik heb interesse in", (width * 2) / 3, (height * 15) / 56);
	context.fillText("het ontdekken", (width * 17) / 25, (height * 18) / 56);
	context.fillText(
		"van hedendaagse problemen.",
		(width * 10) / 16,
		(height * 6) / 16
	);
}
function decision2() {
	drawBackground();

	//question 3
	context.fillStyle = "#FF8901";
	context.fillRect((width * 3) / 19, (height * 22) / 60, 510, 25);
	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText(
		"Ik heb interesse in de griekse taal,",
		(width * 3) / 19,
		(height * 2) / 9
	);
	context.fillText(
		"latijnse taal en cultuur,",
		(width * 4) / 20,
		(height * 4) / 14
	);
	context.fillText(
		"en de hedendaagse impact hiervan.",
		(width * 3) / 19,
		(height * 7) / 20
	);
	//question 4
	context.fillStyle = "#FF00BB";
	context.fillRect((width * 3) / 5, (height * 22) / 60, 510, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText(
		"Ik ben geinteresseerd in de bussiness",
		(width * 47) / 80,
		(height * 4) / 14
	);
	context.fillText(
		"en economie in onze samenleving",
		(width * 3) / 5,
		(height * 7) / 20
	);
	//question 5
	context.fillStyle = "#43FF00";
	context.fillRect((width * 5) / 13, (height * 37) / 60, 495, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText(
		"Ik ben geïnteresseerd in business",
		(width * 5) / 13,
		(height * 8) / 15
	);
	context.fillText(
		"en economie in onze samenleving.",
		(width * 5) / 13,
		(height * 9) / 15
	);
}
function decision3() {
	drawBackground();
	//question 6
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 1) / 7, (height * 22) / 60, 460, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText("Ik vraag me af", (width * 2) / 10, (height * 6) / 20);
	context.fillText(
		"wat economie allemaal inhoudt.",
		(width * 1) / 7,
		(height * 7) / 20
	);
	//question 7
	context.fillStyle = "#FF00BB";
	context.fillRect((width * 24) / 38, (height * 22) / 60, 350, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText("Ik heb interesse", (width * 25) / 38, (height * 6) / 20);
	context.fillText(
		"in hoe een bedrijf werkt.",
		(width * 24) / 38,
		(height * 7) / 20
	);
	//question 8
	context.fillStyle = "#43FF00";
	context.fillRect((width * 1) / 7, (height * 68) / 100, 500, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";

	context.fillText(
		"Ik heb belangstelling",
		(width * 4) / 21,
		(height * 61) / 100
	);
	context.fillText(
		"voor de mens en onze samenleving",
		(width * 1) / 7,
		(height * 2) / 3
	);

	//question 9
	context.fillStyle = "#FF8901";
	context.fillRect((width * 11) / 19, (height * 68) / 100, 510, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText(
		"ik heb interesse in",
		(width * 25) / 39,
		(height * 61) / 100
	);
	context.fillText(
		"biologie, chemie en/of natuurkunde.",
		(width * 11) / 19,
		(height * 2) / 3
	);
}
function decision4() {
	drawBackground();
	//question 10
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 3) / 19, height / 2.6, 350, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText(
		"Ik ben nog niet zeker",
		(width * 7) / 40,
		(height * 18) / 56
	);
	context.fillText(
		"of ik wil verder studeren.",
		(width * 3) / 19,
		(height * 6) / 16
	);
	//question 11
	context.fillStyle = "#FF00BB";
	context.fillRect((width * 10) / 16, (height * 5) / 13, 390, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText(
		"Ik wil graag verder studeren",
		(width * 10) / 16,
		(height * 6) / 16
	);
}
function decision51() {
	drawBackground();

	//question 12
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 10) / 76, height / 2.6, 520, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vraag me af hoe ondernemingen en bedrijven werken.",
		(width * 10) / 76,
		(height * 18) / 56,
		(width * 2) / 5
	);
	//question 13
	context.fillStyle = "#FF00BB";
	context.fillRect((width * 41) / 76, height / 2.6, 500, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in verschillende talen en wil me verdiepen in het Nederlands.",
		(width * 41) / 76,
		(height * 18) / 56,
		(width * 2) / 5
	);
}
function decision52() {
	drawBackground();
	//question 14
	context.fillStyle = "#B54AE2";
	context.fillRect((width * 2) / 19, height / 2.6, (width * 2) / 5, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik heb interesse in bussiness en economie",
		(width * 2) / 19,
		height / 2.6,
		(width * 2) / 5
	);
	//question 15
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 9) / 16, height / 2.6, (width * 5) / 14, 30);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Mijn interesse ligt in het systematisch onderzoeken van diverse vakgebieden.",
		(width * 9) / 16,
		height / 3.1,
		(width * 2) / 5
	);
}
function decision61() {
	drawBackground();
	//question 16
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 3) / 28, (height * 22) / 60, (width * 2) / 5, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Het bestuderen van de menselijke relaties tussen landen in de wereld.",
		(width * 3) / 28,
		(height * 6) / 20,
		(width * 2) / 5
	);
	//question 17
	context.fillStyle = "#FF00BB";
	context.fillRect((width * 22) / 38, (height * 22) / 60, (width * 7) / 20, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vraag me af hoe ondernemingen en bedrijven werken.",
		(width * 22) / 38,
		(height * 6) / 20,
		(width * 2) / 5
	);
	//question 18
	context.fillStyle = "#FF8901";
	context.fillRect((width * 7) / 19, (height * 75) / 100, (width * 2) / 5, 25);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Het verbeteren van mijn communicatieve vaardigheden.",
		(width * 7) / 19,
		(height * 68) / 100,
		(width * 2) / 5
	);
}
function decision62() {
	drawBackground();
	//question 19
	context.fillStyle = "#FF8901";
	context.fillRect((width * 2) / 19, (height * 5) / 13, (width * 2) / 5, 30);
	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik ben niet afgeschrik van een paar uurtjes extra wiskunde.",
		(width * 2) / 19,
		(height * 4) / 13,
		(width * 2) / 5
	);
	//question 20
	context.fillStyle = "#FF00BB";
	context.fillRect(
		(width * 35) / 64,
		(height * 5) / 13,
		(width * 30.9) / 80,
		30
	);

	context.fillStyle = "black";
	context.font = "32px Roboto";
	drawMultilineText(
		"Ik vind het interessant hoe mensen zich gedragen en hoe onze samenleving werkt.",
		(width * 35) / 64,
		(height * 4) / 13,
		(width * 2) / 5
	);
}
function mouseClickDown(event) {
	const rect = context.canvas.getBoundingClientRect();
	const scaleX = context.canvas.width / rect.width;
	const scaleY = context.canvas.height / rect.height;

	const mouseX = (event.clientX - rect.left) * scaleX;
	const mouseY = (event.clientY - rect.top) * scaleY;

	// utils.fillCircle(mouseX, mouseY, 10);
	if (
		stage == 0 &&
		mouseY > height / 2 - 25 &&
		mouseY < height / 2 + 25 &&
		mouseX > width / 2 - 80 &&
		mouseX < width / 2 + 80
	) {
		stage++;
	} else if (stage == 1) {
		textSelect(mouseX, mouseY, "a", "b");
	} else if (stage == 2) {
		textSelect2(mouseX, mouseY, "c", "d", "e");
	} else if (stage == 3) {
		textSelect3(mouseX, mouseY, "f", "g", "h", "i");

		// } else if (stage == 4) {
		// 	let result = textSelect(mouseX, mouseY, "j", "k");
		// 	choices.push(result);
		// 	stage++;
		// } else if (stage == 5) {
		// 	let result = textSelect(mouseX, mouseY, "l", "m");
		// 	choices.push(result);
		// 	stage++;
		// } else if (stage == 6) {
		// 	let result = textSelect(mouseX, mouseY, "n", "o");
		// 	choices.push(result);
		// 	stage++;
	}
	console.log(choices);
}
function mousePos(event) {
	const rect = context.canvas.getBoundingClientRect();
	const scaleX = context.canvas.width / rect.width;
	const scaleY = context.canvas.height / rect.height;

	const mouseX = (event.clientX - rect.left) * scaleX;
	const mouseY = (event.clientY - rect.top) * scaleY;
	return { mouseX: mouseX, mouseY: mouseY };
}
function drawBackground() {
	rabbitDoodle.style.display = "none";

	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

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

function drawMultilineText(text, x, y, maxWidth) {
	var words = text.split(" ");
	var currentLine = "";
	var lineHeight = 50; // Adjust as needed

	for (var i = 0; i < words.length; i++) {
		var testLine = currentLine + words[i] + " ";
		var metrics = context.measureText(testLine);
		var testWidth = metrics.width;

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
function result1() {}
