document.oncontextmenu = function() {
    return false;
}

function setup() {
	let canvas = createCanvas(canvasSize, canvasSize);
	// background(0);
	stroke(25);
	strokeWeight(2);
	noStroke();
	textFont(myFont);
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	textSize(myFontSize);


	myGameboard = new Gameboard();
	myGameboard.generate();
	// noLoop();
}

function mouseReleased() { 
	if (!gameover) {
		const atHover = locate(mouseX, mouseY);
		const q = atHover[0];
		const r = atHover[1];
		myGameboard.board[q][r].clicked(mouseButton);
	}
}

function draw() {
	myGameboard.board.forEach(myQ => {
			myQ.forEach(myCell => {
				myCell.show();
			})
				
		});
	const atHover = locate(mouseX, mouseY);
	myGameboard.board[atHover[0]][atHover[1]].showHighlight();

	if (myGameboard.revealedCount == (3 * boardRadius * (boardRadius + 1)  + 1) - bombCount) {
		gameOver(1);
	}

}