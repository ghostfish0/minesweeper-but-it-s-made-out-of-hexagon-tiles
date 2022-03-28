function gameOver(won) {
	myGame.over = 1;
	Won = won;
	if (!Won)
		myGame.board.forEach(myQ => {
			myQ.forEach(myCell => {
				if (myCell.bombed)
					myCell.reveal();
			})
		});
	else
		myGame.board.forEach(myQ => {
			myQ.forEach(myCell => {
				if (myCell.bombed) {
					myCell.flagged = 1;
				}
			})
		});
}