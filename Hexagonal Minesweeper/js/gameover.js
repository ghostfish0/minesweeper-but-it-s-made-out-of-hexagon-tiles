function gameOver(won) {
	gameover = 1;
	Won = won;
	for(let i = 0; i < rows; i++)
		for(let j = 0; j < rows; j++)
			if (myGameboard.board[i][j].bombed)
				myGameboard.board[i][j].revealed = 1;
}