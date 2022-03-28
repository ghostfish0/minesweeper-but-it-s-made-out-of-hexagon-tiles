function gameOver(won) {
	gameover = 1;
	Won = won;
	if (!Won)
		myGameboard.board.forEach(myQ => {
			myQ.forEach(myCell => {
				if (myCell.bombed)
					myCell.reveal();
			})
		});
	else
		myGameboard.board.forEach(myQ => {
			myQ.forEach(myCell => {
				if (myCell.bombed) {
					myCell.flagged = 1;
				}
			})
		});


}