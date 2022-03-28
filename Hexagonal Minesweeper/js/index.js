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


	myGame = new Game();
	myGame.generate();
	setInterval(timeIt, 10);
	// noLoop();
}

function mouseReleased() { 
	if (!myGame.over) {
		const atHover = locate(mouseX, mouseY);
		const q = atHover[0];
		const r = atHover[1];
		myGame.board[q][r].clicked(mouseButton);
	}
}

function timeIt() {
	if (!myGame.over && myGame.revealedCount > 0)
		myGame.timePassed += 0.1;
}

function draw() {
	myGame.board.forEach(myQ => {
			myQ.forEach(myCell => {
				myCell.show();
			})
				
		});
	const atHover = locate(mouseX, mouseY);
	myGame.board[atHover[0]][atHover[1]].showHighlight();

	if (myGame.revealedCount == (3 * boardRadius * (boardRadius + 1)  + 1) - bombCount) {
		gameOver(1);
	}

/*	if (myGame.over) {
		push();
		fill('rgba(0, 0, 0, 0.8)');
		hexagon(canvasSize / 2, canvasSize / 2, 6.2 * cellRadius, 1)

		fill(255);
		textSize(1.5 * cellRadius);
		if (Won) {
			text("YOU WON!", canvasSize / 2, canvasSize * 0.45);
		}
		else {
			text("BOOM!", canvasSize / 2, canvasSize * 0.45);
		}
		textSize(cellRadius);
		text(myGame.timePassed.toFixed(2) + "s", canvasSize / 2, canvasSize * 0.5);
		pop();
	}
*/
}