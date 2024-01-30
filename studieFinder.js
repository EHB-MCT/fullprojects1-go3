import context from "./context.js";
import * as utils from "./utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let mouseXPos = 0;
let mouseYpos = 0;
let choiceXPos = 0;
let choiceYpos = 0;
let choices = [];
let stage = 1;
let mouseIsDown = false;
var rabbitDoodle = document.getElementById("rabbitImage");

window.onmousemove = mousePos;
window.onmousedown = mouseClickDown;
window.onmouseup = mouseClickUp;

setup();
drawStartMenu();

function setup() {
	context.font = "24px Roboto";
}

function draw() {
	drawBackground();
	choiceButton();
	phase();

	drawCircle();

	drawStraw(mouseXPos, mouseYpos);

	requestAnimationFrame(draw);
}
function drawCircle() {
	context.fillStyle = "white";
	utils.fillCircle(choiceXPos, choiceYpos, 20);
}
function drawStartMenu() {
	//arrows
	context.beginPath();
	context.arc(666, 300, 50, 0, -2, true);
	context.moveTo(686, 275);
	context.lineTo(716, 300);
	context.lineTo(738, 275);
	context.stroke();

	context.beginPath();
	context.arc(700, 50, 350, 0.4, (Math.PI * 5) / 16);
	context.moveTo(910, 300);
	context.lineTo(895, 341);
	context.lineTo(930, 352);
	context.stroke();

	context.beginPath();
	context.arc(910, 300, 150, 1.79, 2.4);
	context.moveTo(830, 415);
	context.lineTo(800, 401);
	context.lineTo(788, 420);
	context.stroke();

	// Wat zie ik in mijn richting?
	context.fillStyle = "#FF00BB";
	context.strokeStyle = "white";
	context.beginPath();
	context.moveTo((width * 78) / 120, (height * 40) / 98);
	context.lineTo(width, (height * 20) / 50);
	context.lineTo(width, (height * 24) / 50);
	context.lineTo((width * 79) / 120, (height * 24) / 50);
	context.closePath();
	context.stroke();
	context.fill();
	context.font = "50px besides";
	context.fillStyle = "black";
	context.fillText("Wat zie ik in mijn", (width * 20) / 30, (height * 23) / 50);
	context.fillText("richting?", (width * 22) / 30, (height * 53) / 100);

	//Welke richting is voor mij?
	context.fillStyle = "#00E5FF";
	context.beginPath();
	context.moveTo((width * 22) / 50, (height * 2) / 32);
	context.lineTo((width * 38) / 50, (height * 2) / 32);
	context.lineTo((width * 38) / 50, (height * 9) / 64);
	context.lineTo((width * 22) / 50, (height * 9) / 64);
	context.closePath();
	context.stroke();
	context.fill();
	context.font = "50px besides";
	context.fillStyle = "black";
	context.fillText("Welke richting is", (width * 22) / 48, (height * 4) / 32);
	context.fillText("voor mij?", (width * 26) / 50, (height * 9) / 50);

	//button
	context.fillStyle = "#9A00FF";
	context.fillRect(width / 2 - 80, height / 2 - 25, 160, 50);
	context.font = "30px Roboto";
	context.fillStyle = "white";
	context.fillText("Druk hier", width / 2 - 60, height / 2 + 8);

	//Wat ga ik doen?
	context.beginPath();
	context.moveTo((width * 3) / 64, (height * 11) / 32);
	context.lineTo((width * 22) / 64, (height * 12) / 32);
	context.lineTo((width * 22) / 64, (height * 15) / 32);
	context.lineTo((width * 3) / 64, (height * 14) / 32);
	context.closePath();
	context.stroke();
	context.fillStyle = "#43FF00";
	context.fill();
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
	if (stage == 0) {
		startMenu();
	} else if (stage == 1) {
		decision1();
	} else if (stage == 2) {
		decision2();
	} else if (stage == 3) {
		decision3();
	} else if (stage == 4) {
		decision4();
	}
}
function decision1() {
	//question 1
	context.fillText("Ik heb interesse", width / 2 - 150, height / 2 - 165);
	context.fillText("in de latijnse taal", width / 2 - 150, height / 2 - 125);
	context.fillText("en geschiedenis", width / 2 - 150, height / 2 - 85);
	//question 2
	context.fillText("TEST22", width / 2 + 100, height / 2 - 100);

	if (choiceXPos < width / 2 && mouseIsDown == true) {
		choices.push("1");
	} else if (choiceXPos > width / 2 && mouseIsDown == true) {
		choices.push("2");
	}
}
function decision2() {
	//question 3
	context.fillText("IDK", width / 2 - 150, height / 2 - 100);
	//question 4
	context.fillText("WHAT THE FUCK", width / 2 + 100, height / 2 - 100);
	//question 5
	context.fillText("text", width / 2, height / 2 - 100);

	if (choiceXPos < (width * 1) / 3 && mouseIsDown == true) {
		choices.push("1");
	} else if (
		choiceXPos > (width * 1) / 3 &&
		choiceXPos < (width * 2) / 3 &&
		mouseIsDown == true
	) {
		choices.push("2");
	} else if (choiceXPos > (width * 2) / 3 && mouseIsDown == true) {
		choices.push("3");
	}
}
function decision3() {
	//question 6
	context.fillText("this is question 3", width / 2 - 150, height / 2 - 100);
	//question 7
	context.fillText("text", width / 2 + 100, height / 2 - 100);
	//question 8
	context.fillText("text", width / 2 + 100, height / 2 - 100);
	//question 9
	context.fillText("text", width / 2 + 100, height / 2 - 100);
}
function decision4() {
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
function choiceButton() {
	context.fillStyle = "orange";
	context.fillRect(width - 200, height - 100, 200, 100);

	context.fillStyle = "black";
	context.strokeText("press", width - 180, height - 50);

	if (
		choiceXPos != 0 &&
		mouseXPos > width - 200 &&
		mouseYpos > height - 100 &&
		mouseIsDown == true
	) {
		choiceXPos = 0;
		choiceYpos = 0;
		stage++;
	}
}
function mouseClickDown(eventData) {
	mouseIsDown = true;
	choiceXPos = eventData.pageX;
	choiceYpos = eventData.pageY;
}
function mouseClickUp(eventData) {
	mouseIsDown = false;
}
function mousePos(eventdata) {
	mouseXPos = eventdata.clientX;
	mouseYpos = eventdata.clientY;
}
function drawBackground() {
	rabbitDoodle.style.display = "none";

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
