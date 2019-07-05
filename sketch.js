function setup() {
	createCanvas(400, 400);
	background(255);
}

function draw() {
	fill(0);
	let p2 = { x: 73, y: 24 };
	let p3 = { x: 73, y: 61 },
		p4 = { x: 15, y: 65 };
	stroke(0);
	circle(200, 150, 150);
	triangle(134, 115, 167, 85, 125, 60);
	triangle(266, 115, 233, 85, 275, 60);
	fill('#B97C6D');
	triangle(200, 160, 205, 150, 195, 150);
	noFill();
	stroke(160);
	curve(170, 162, 188, 155, 120, 162, 135, 167);
	curve(230, 162, 212, 155, 280, 162, 265, 167);
}
