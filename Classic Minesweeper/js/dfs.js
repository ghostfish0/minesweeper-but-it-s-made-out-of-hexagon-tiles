function dfs(x, y) {
	console.log(x, y);
	if (myGameboard.revealedCount == rows * rows - bombCount) {
		gameOver(1);
		return 0;
	}


	for(let k = 0; k < 8; k++) {
		const X = x + dfsMoveX[k];
		const Y = y + dfsMoveY[k];
	
		if (X >= 0 && Y >= 0 && X < rows && Y < rows) {
			if (!myGameboard.board[X][Y].bombed && 
				!myGameboard.board[X][Y].revealed) {

					myGameboard.board[X][Y].reveal();
					if (myGameboard.board[X][Y].num > 0)
						continue;
					dfs(X, Y);
				}
		}
	}
}