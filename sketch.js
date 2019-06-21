function setup() {
	createCanvas(100, 100);
}

function draw() {
	background(100, 150, 400);
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 30, 30);
}
