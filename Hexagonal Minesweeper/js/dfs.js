function dfs(q, r) {
	for(let k = 0; k < 6; k++) {
		const Q = q + dfsMoveQ[k];
		const R = r + dfsMoveR[k];
		if (isValid(Q,R)) {
			const QR2XY = qr2xy(Q, R);
			const X = QR2XY[0];
			const Y = QR2XY[1];
			if (!myGame.board[X][Y].bombed && 
				!myGame.board[X][Y].revealed && 
				!myGame.board[X][Y].flagged) {
					myGame.board[X][Y].reveal();
					if (myGame.board[X][Y].num > 0)
						continue;
					dfs(Q, R);
				}
		}
	}
}