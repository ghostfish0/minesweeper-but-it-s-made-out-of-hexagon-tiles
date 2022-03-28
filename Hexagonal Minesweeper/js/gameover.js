function gameOver(won) {
	gameover = 1;
	Won = won;
	myGameboard.board.forEach(myQ => {
		myQ.forEach(myCell => {
			if (myCell.bombed)
				myCell.reveal();
		})
	})

}