document.oncontextmenu = function() {
    return false;
}

function setup() {
	canvas = createCanvas(canvasSize, canvasSize);

	myGame = new Game();
	myGame.generate();
	setInterval(timeIt, 10);

	stroke(25);
	strokeWeight(2);
	noStroke();
	textFont(myFont);
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	textSize(1.3 * cellRadius);

	pixelDensity(20 / 13.0);
}

function mouseReleased() { 
	if (!myGame.over) {
		const atHover = locate(mouseX, mouseY);
		const x = atHover[0];
		const y = atHover[1];
		if (x >= 0 && y >= 0)
			myGame.board[x][y].clicked(mouseButton);
	}

	return false;
}


function draw() {
	myGame.board.forEach(myQ => {
			myQ.forEach(myCell => {
				myCell.show();
			})
				
		});
	const atHover = locate(mouseX, mouseY);
	if (atHover[0] >= 0 && atHover[1] >= 0)
		myGame.board[atHover[0]][atHover[1]].showHighlight();

	if (myGame.revealedCount == (3 * boardRadius * (boardRadius + 1)  + 1) - bombCount) {
		gameOver(1);
	}



}