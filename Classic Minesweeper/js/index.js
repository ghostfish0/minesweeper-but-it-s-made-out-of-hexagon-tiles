document.oncontextmenu = function() {
    return false;
}

function setup() {
	let canvas = createCanvas(canvasSize, canvasSize);
	background(0);
	stroke(0);
	strokeWeight(2);
	textFont(myFont);
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	textSize(myFontSize);


	myGameboard = new Gameboard(rows, bombRate);
	myGameboard.generate();
}

function mousePressed() { 
	if (!gameover) {
		const x = Math.floor((mouseX - margin) / width);
		const y = Math.floor((mouseY - margin) / width);
		myGameboard.board[x][y].clicked(mouseButton);
	}
}

function draw() {
	for(let i = 0; i < rows; i++)
		for(let j = 0; j < rows; j++)
			myGameboard.board[j][i].show();

}