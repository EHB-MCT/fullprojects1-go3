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
decision3();

function setup() {
	context.font = "24px Roboto";
	drawStartMenu();
}

function draw() {
	phase();

	requestAnimationFrame(draw);
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
	context.fillText("Wat zie ik in mijn", (width * 20) / 30, (height * 23) / 50);
	context.fillText("richting?", (width * 22) / 30, (height * 53) / 100);

	//Welke richting is voor mij?
	highlight("#00E5FF", (width * 22) / 50, (height * 3) / 32, 600);
	context.fillStyle = "black";
	context.font = "50px besides";
	context.fillText("Welke richting is", (width * 22) / 48, (height * 4) / 32);
	context.fillText("voor mij?", (width * 26) / 50, (height * 9) / 50);

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
		mouseX > width / 8 &&
		mouseX < width / 2 &&
		mouseY > height / 4 &&
		mouseY < (height * 3) / 5
	) {
		return optionA;
	} else if (
		mouseX < width &&
		mouseX > width / 2 &&
		mouseY > height / 4 &&
		mouseY < (height * 3) / 5
	) {
		return optionB;
	}
}

function textSelect2(mouseX, mouseY, optionA, optionB, optionC) {
	if (
		mouseX > (width * 3) / 19 &&
		mouseX < (width * 3) / 19 + 510 &&
		mouseY > (height * 2) / 9 &&
		mouseY < (height * 2) / 9 + 25
	) {
		return optionA;
	} else if (
		mouseX > (width * 47) / 80 &&
		mouseX < width / 2 &&
		mouseY > (height * 4) / 14 &&
		mouseY < (height * 3) / 5
	) {
		return optionB;
	} else if (
		mouseX > (width * 2) / 7 &&
		mouseX < (width * 5) / 7 &&
		mouseY > (height * 4) / 7 &&
		mouseY < (height * 5) / 7
	) {
		return optionC;
	}
}
function textSelect3(mouseX, mouseY, optionA, optionB, optionC, optionD) {
	if (
		mouseX > width / 8 &&
		mouseX < width / 2 &&
		mouseY > (height * 2) / 9 &&
		mouseY < (height * 4) / 9
	) {
		return optionA;
	} else if (
		mouseX < width &&
		mouseX > width / 2 &&
		mouseY > (height * 2) / 9 &&
		mouseY < (height * 4) / 9
	) {
		return optionB;
	}
	if (
		mouseX > width / 8 &&
		mouseX < width / 2 &&
		mouseY > (height * 6) / 9 &&
		mouseY < (height * 8) / 9
	) {
		return optionC;
	} else if (
		mouseX < width &&
		mouseX > width / 2 &&
		mouseY > (height * 6) / 9 &&
		mouseY < (height * 8) / 9
	) {
		return optionD;
	}
}
function decision1() {
	drawBackground();
	context.fillStyle = "black";

	//question 1
	context.fillStyle = "#00E5FF";
	context.fillRect((width * 3) / 19, height / 2.6, 480, 30);

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
	context.fillRect((width * 10) / 16, height / 2.6, 425, 30);

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
	context.fillStyle = "black";
	context.font = "32px Roboto";
	context.fillText("Ik vraag me af", (width * 1) / 7, (height * 2) / 7);
	context.fillText(
		"wat economie allemaal inhoudt.",
		width / 2 - 150,
		height / 2 - 100
	);
	//question 7
	context.fillText("text", width / 2 + 100, height / 2 - 100);
	//question 8
	context.fillText("text", width / 2 + 100, height / 2 - 100);
	//question 9
	context.fillText("text", width / 2 + 100, height / 2 - 100);
}
function decision4() {
	drawBackground();
	context.fillStyle = "black";
	//question 10
	context.fillText("text", width / 2 - 150, height / 2 - 100);
	//question 11
	context.fillText("text", width / 2 + 100, height / 2 - 100);
}
function decision51() {
	//question 12
	context.fillText("text", width / 2 - 150, height / 2 - 100);
	//question 13
	context.fillText("text", width / 2 + 100, height / 2 - 100);
}
function decision52() {
	//question 14
	context.fillText("text", width / 2 - 150, height / 2 - 100);
	//question 15
	context.fillText("text", width / 2 + 100, height / 2 - 100);
}
function decision61() {
	//question 16
	context.fillText("text", width / 2 - 150, height / 2 - 100);
	//question 17
	context.fillText("text", width / 2 + 100, height / 2 - 100);
	//question 18
	context.fillText("text", width / 2 + 100, height / 2 - 100);
}
function decision62() {
	//question 19
	context.strokeText("text", width / 2 - 150, height / 2 - 100);
	//question 20
	context.strokeText("text", width / 2 + 100, height / 2 - 100);
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
	}
	else if (stage == 1) {
		let result = textSelect(mouseX, mouseY, "a", "b");
		choices.push(result);
		console.log(choices);
		stage++;
	} else if (stage == 2) {
		let result = textSelect2(mouseX, mouseY, "c", "d", "e");
		choices.push(result);
		console.log(choices);
		stage++;
	} else if (stage == 3) {
		let result = textSelect3(mouseX, mouseY, "f", "g", "h", "i");
		choices.push(result);
		console.log(choices);
		stage++;
	} else if (stage == 4) {
		let result = textSelect(mouseX, mouseY, "j", "k");
		choices.push(result);
		console.log(choices);
		stage++;
	} else if (stage == 5) {
		let result = textSelect(mouseX, mouseY, "l", "m");
		choices.push(result);
		console.log(choices);
		stage++;
	} else if (stage == 6) {
		let result = textSelect(mouseX, mouseY, "n", "o");
		choices.push(result);
		console.log(choices);
		stage++;
	}
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
