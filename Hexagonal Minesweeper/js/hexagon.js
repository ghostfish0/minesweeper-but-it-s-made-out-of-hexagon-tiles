function hexagon(x, y, r) {
	beginShape();
	for(let i = 0; i < 6; i++) {
		const X = x + r * cos(i * TAU / 6.0);
		const Y = y + r * sin(i * TAU / 6.0);
		vertex(X, Y);
	}
	endShape(CLOSE);
}

function shadowandhighlight(x, y, r) {
	let vertices = [];	
	for(let i = 0; i < 6; i++) {
		const X = x + r * cos(i * TAU / 6.0);
		const Y = y + r * sin(i * TAU / 6.0);
		vertices.push([X, Y]);
	}
	push();
	noStroke();
	fill(255);
	beginShape();
	vertex(vertices[4][0], vertices[4][1]);
	vertex(vertices[5][0], vertices[5][1]);
	vertex(vertices[2][0], vertices[2][1]);
	vertex(vertices[3][0], vertices[3][1]);
	endShape(CLOSE);

	fill(128);
	beginShape();
	vertex(vertices[1][0], vertices[1][1]);
	vertex(vertices[2][0], vertices[2][1]);
	vertex(vertices[5][0], vertices[5][1]);
	vertex(vertices[0][0], vertices[0][1]);
	endShape(CLOSE);
	pop();
}
