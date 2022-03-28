function dfs(q, r) {
	for(let k = 0; k < 6; k++) {
		const Q = q + dfsMoveQ[k];
		const R = r + dfsMoveR[k];
		if (isValid(Q,R)) {
			const QR2XY = qr2xy(Q, R);
			const X = QR2XY[0];
			const Y = QR2XY[1];
			if (!myGameboard.board[X][Y].bombed && 
				!myGameboard.board[X][Y].revealed && 
				!myGameboard.board[X][Y].flagged) {
					myGameboard.board[X][Y].reveal();
					if (myGameboard.board[X][Y].num > 0)
						continue;
					dfs(Q, R);
				}
		}
	}
}