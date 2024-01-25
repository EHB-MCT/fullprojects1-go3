import context from "./context.js";
import * as utils from "./utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let mouseXPos = 0;
let mouseYpos = 0;
let choiceXPos = 0;
let choiceYpos = 0;
let choices = [];
let step = 1;
let mouseIsDown = false;

window.onmousemove = mousePos;
window.onmousedown = mouseClickDown;
window.onmouseup = mouseClickUp;

setup();
draw();

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

function phase() {
	if (step == 1) {
		decision1();
	} else if (step == 2) {
		decision2();
	} else if (step == 3) {
		decision3();
	} else if (step == 4) {
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
		step++;
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

function drawStraw(x, y) {
	utils.strokeCircle(x, y - 25);
	context.fillStyle = "red";
	context.fillRect(x - 8, y, 16, 80);
	context.fillStyle = "black";
	utils.fillCircle(x, y + 80, 8);
}

function drawBackground() {
	//floor
	context.fillStyle = "beige";
	context.fillRect(0, 0, width, (height * 2) / 3);
	context.fillStyle = "lightgrey";
	context.fillRect(0, (height * 2) / 3, width, (height * 1) / 3);

	//middle board
	context.fillStyle = "grey";
	context.fillRect(width / 2 - 205, height / 2 - 205, 410, 210);

	context.fillStyle = "darkgreen";
	context.fillRect(width / 2 - 200, height / 2 - 200, 400, 200);

	//left board
	context.fillStyle = "Grey";
	context.beginPath();
	context.moveTo(width / 2 - 205, height / 2 - 205);
	context.lineTo(width / 2 - 500, height / 2 - 220);
	context.lineTo(width / 2 - 500, height / 2 + 20);
	context.lineTo(width / 2 - 205, height / 2 + 5);
	context.closePath();
	context.stroke();
	context.fill();

	context.fillStyle = "darkgreen";
	context.beginPath();
	context.moveTo(width / 2 - 210, height / 2 - 199);
	context.lineTo(width / 2 - 495, height / 2 - 215);
	context.lineTo(width / 2 - 495, height / 2 + 15);
	context.lineTo(width / 2 - 210, height / 2 - 1);
	context.closePath();
	context.stroke();
	context.fill();

	//right board
	context.fillStyle = "Grey";
	context.beginPath();
	context.moveTo(width / 2 + 205, height / 2 - 205);
	context.lineTo(width / 2 + 500, height / 2 - 220);
	context.lineTo(width / 2 + 500, height / 2 + 20);
	context.lineTo(width / 2 + 205, height / 2 + 5);
	context.closePath();
	context.stroke();
	context.fill();

	context.fillStyle = "darkgreen";
	context.beginPath();
	context.moveTo(width / 2 + 210, height / 2 - 199);
	context.lineTo(width / 2 + 495, height / 2 - 215);
	context.lineTo(width / 2 + 495, height / 2 + 15);
	context.lineTo(width / 2 + 210, height / 2 - 1);
	context.closePath();
	context.stroke();
	context.fill();
}
