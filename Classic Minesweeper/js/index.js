document.oncontextmenu = function() {
    return false;
}

function setup() {
	let canvas = createCanvas(canvasSize, canvasSize);
	background(0);
	fill(235, 169, 55);
	stroke(0);
	strokeWeight(2);

	myGameboard = new Gameboard(rows, bombRate);
	myGameboard.generate();
	myGameboard.fillNum();
}

function mousePressed() { 
	const x = Math.floor((mouseX - margin) / width);
	const y = Math.floor((mouseY - margin) / width);
	myGameboard.board[x][y].clicked(mouseButton);
}

function draw() {
	for(let i = 0; i < rows; i++)
		for(let j = 0; j < rows; j++) {
			myGameboard.board[i][j].show();
		}
}