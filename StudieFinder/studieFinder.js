import context from "./context.js";
import * as utils from "./utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let mouseXPos = 0;
let mouseYpos = 0;
let choices = [];

window.onmousemove = mousePos;

draw();

function setup() {}

function draw() {
	drawBackground();
	drawStraw(mouseXPos, mouseYpos);

	question1();

	requestAnimationFrame(draw);
}

function question1() {
	context.font("52px Arial");
	context.strokeText("text text text", width / 2 - 50, height / 2 - 100);
}

function click(eventData) {
	console.log(eventData);
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
