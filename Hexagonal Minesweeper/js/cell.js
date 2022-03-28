class Cell {
	constructor(q, r) {
		this.q = q;
		this.r = r;
		this.centerX = canvasSize/2 + 1.5 * this.q * cellRadius;
		this.centerY = canvasSize/2 + (this.r + this.q/2.0) * sqrt3 * cellRadius;
		this.revealed = 0;
		this.flagged = 0; 
		this.bombed = 0; 
		this.num = 0;
	}
	fillNum() {
		for(let k = 0; k < 6; k++) {
			const Q = this.q + dfsMoveQ[k];
			const R = this.r + dfsMoveR[k];
			if (isValid(Q,R)) {
				const QR2XY = qr2xy(Q, R);
				const X = QR2XY[0];
				const Y = QR2XY[1];
				if (myGameboard.board[X][Y].bombed)
					this.num++;
			}
		}
	}

	reveal() {
		if (!this.revealed)
			myGameboard.revealedCount++;
		this.revealed = 1;
	}


	showFill() {
		if (!this.revealed) {
			if (this.flagged)
				fill(255, 203, 61);
			else 
				fill(unrevealedBG);
			hexagon(this.centerX, this.centerY, cellRadius);

		}
		else if (this.revealed) {
			if (this.bombed) {
				if (gameover)
					if (!Won)
						fill(255, 51, 71);
					else
						fill(88, 184, 98);
			}
			else {
				fill(revealedBG);
			}
			hexagon(this.centerX, this.centerY, cellRadius);
		}
	}

	showText() {
		if (this.revealed) {
			if (!this.bombed) {
				push();

				fill(255);
				noStroke();
				if (this.num > 0)
					text(this.num, this.centerX, this.centerY);

				pop();
			}
		else {
			push();

			fill(255);
			noStroke();
			text("X", this.centerX, this.centerY);

			pop();

		}
		}
		else {
			if (this.flagged) {
			push();

			fill(50);
			noStroke();
			text("F", this.centerX, this.centerY);

			pop();

			}
		}

	}

	show() {
		this.showFill();
		this.showText();
	}

	showHighlight() {
		const k = 30;
		if (this.flagged || (this.bombed && this.revealed))
			return 0;
		if (!this.revealed)
			fill(unrevealedBG[0] +  k, unrevealedBG[1] + k, unrevealedBG[2] + k);
		if (this.revealed)
			fill(revealedBG[0] +  k, revealedBG[1] + k, revealedBG[2] + k);
		hexagon(this.centerX, this.centerY, cellRadius);
		this.showText();
	}

	clicked(myMousebutton) {
		if (myMousebutton == LEFT) {
			if (!this.flagged) { 
				this.reveal();
				if (this.bombed) {
					gameOver(0);
				}
				else {	
					if (this.num == 0) {
						dfs(this.q, this.r);
					}
					else {
						let countFlags = 0;
						for(let k = 0; k < 6; k++) {
							const Q = this.q + dfsMoveQ[k];
							const R = this.r + dfsMoveR[k];
							if (isValid(Q,R)) {
								const QR2XY = qr2xy(Q, R);
								const X = QR2XY[0];
								const Y = QR2XY[1];
								if (myGameboard.board[X][Y].flagged)
									countFlags++;
							}

						}
						if (countFlags == this.num) {
							for(let k = 0; k < 6; k++) {
								const Q = this.q + dfsMoveQ[k];
								const R = this.r + dfsMoveR[k];
								if (isValid(Q,R)) {
									const QR2XY = qr2xy(Q, R);
									const X = QR2XY[0];
									const Y = QR2XY[1];
									if (!myGameboard.board[X][Y].flagged) {
										if (myGameboard.board[X][Y].bombed) {
											gameOver(0);
											break;
										}
										myGameboard.board[X][Y].reveal();
										if (myGameboard.board[X][Y].num == 0)
											dfs(Q, R);
									}
								}

							}					
						}
					}
				}
			}
		}
		if (myMousebutton == RIGHT) {
			if (!this.revealed)
				this.flagged = !this.flagged;
		}
	}

}