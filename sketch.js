function setup() {
	createCanvas(400, 400);
	background(150);
}

function draw() {
	var c = color(0);
	fill(c);
	circle(200, 150, 150);
	triangle(134, 115, 167, 85, 125, 60);
	triangle(266, 115, 233, 85, 275, 60);
	fill('#B97C6D');
	triangle(200, 160, 205, 150, 195, 150);
}
