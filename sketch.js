function setup() {
	createCanvas(600, 700);
	background(100, 150, 400);
}

function draw() {
	if (mouseIsPressed) {
		fill(75);
	} else {
		fill(255);
	}
	rect(mouseX, mouseY, 30, 30);
}
