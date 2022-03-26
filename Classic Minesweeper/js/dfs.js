function dfs(x, y, edge) {
	myGameboard.board[x][y].revealed = 1;
	if (edge)
		return 0;

	for(let k = 0; k < 8; k++) {
		const X = x + dfsMoveX[k];
		const Y = y + dfsMoveY[k];
	
		if (X >= 0 && Y >= 0 && X < rows && Y < rows) {
			if (!myGameboard.board[X][Y].bombed && 
				!myGameboard.board[X][Y].revealed) {
					dfs(X, Y, (myGameboard.board[X][Y].num > 0));
				}
		}
	}
}