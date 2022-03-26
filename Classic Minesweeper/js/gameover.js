gameover = 1;
function gameOver() {
	for(let i = 0; i < rows; i++)
		for(let j = 0; j < rows; j++)
			myGameboard.board[i][j].revealed = 1;
}