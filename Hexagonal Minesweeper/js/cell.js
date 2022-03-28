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
			fill(unrevealedBG);
			shadowandhighlight(this.centerX, this.centerY, cellRadius);
			hexagon(this.centerX, this.centerY, 0.8 * cellRadius);

		}
		else if (this.revealed) {
			if (this.bombed) {
				if (gameover)
					if (!Won)
						fill(255, 0, 0);
					else
						fill(88, 184, 98);
			}
			else {
				fill(revealedBG);
			}
			push();
			stroke(128);
			strokeWeight(0.15 * cellRadius);
			hexagon(this.centerX, this.centerY, cellRadius);
			pop();
		}
	}

	showText() {
		const X = this.centerX + 0.075 * cellRadius;
		const Y = this.centerY - 0.2 * cellRadius;
		if (this.revealed) {
			if (!this.bombed) {
				if (this.num > 0) {
					push();
					fill(numColors[this.num]);
					noStroke();
					text(this.num, X, Y);
					pop();
				}
			}
			else {
				drawBomb(this.centerX, this.centerY, 0.6 * cellRadius);
			}
		}
		else {
			if (this.flagged) {
				drawFlag(this.centerX, this.centerY, 0.5 * cellRadius);
			}
		}

	}

	show() {
		this.showFill();
		this.showText();
	}

	showHighlight() {
		const k = 35;
		if (this.flagged || (this.bombed && this.revealed))
			return 0;
		if (!this.revealed) {
			shadowandhighlight(this.centerX, this.centerY, cellRadius);
			fill(unrevealedBG[0] +  k, unrevealedBG[1] + k, unrevealedBG[2] + k);
			hexagon(this.centerX, this.centerY, 0.8 * cellRadius);
		}
		if (this.revealed) {
			push();
			stroke(129);
			strokeWeight(0.075 * cellRadius);
			fill(revealedBG[0] +  k, revealedBG[1] + k, revealedBG[2] + k);
			hexagon(this.centerX, this.centerY, 0.95 * cellRadius);
			pop();
		}
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