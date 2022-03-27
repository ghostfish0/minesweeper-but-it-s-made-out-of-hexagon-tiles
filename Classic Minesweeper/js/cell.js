class Cell {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.revealed = 0;
		this.flagged = 0; 
		this.bombed = 0; 
		this.num = 0;
	}
	fillNum() {
		for(let k = 0; k < 8; k++) {
			const X = this.x + dfsMoveX[k];
			const Y = this.y + dfsMoveY[k];
			if (X >= 0 && Y >= 0 && X < rows && Y < rows)
				if (myGameboard.board[X][Y].bombed)
					this.num++;
		}
	}

	reveal() {
		if (!this.revealed)
			myGameboard.revealedCount++;
		this.revealed = 1;
	}

	show() {
		const X = margin + this.x * width;
		const Y = margin + this.y * width;
		if (this.revealed == 0) {
			// fill(175, 129, 28);
			if (this.flagged)
				fill(255, 255, 0);
			else 
				fill(100, 100, 100);
			rect(X, Y, width);
		}
		else if (this.revealed == 1) {
			if (this.bombed) {
				fill(255, 0, 255);
				if (gameover)
					if (!Won)
						fill(255, 0, 0);
					else
						fill(0, 255, 0);
			}
			else {
				fill(0, 0, 255);
			}
			rect(X, Y, width);

			if (!this.bombed) {
				push();

				textAlign(CENTER, CENTER);
				fill(255);
				noStroke();
				if (this.num > 0)
					text(this.num, X + width / 2 , Y + width / 2 + 1);

				pop();
			}

		}
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
						dfs(this.x, this.y);
					}
					else {
						let countFlags = 0;
						for(let k = 0; k < 8; k++) {
							const X = this.x + dfsMoveX[k];
							const Y = this.y + dfsMoveY[k];
							if (X >= 0 && Y >= 0 && X < rows && Y < rows) {
								if (myGameboard.board[X][Y].flagged)
									countFlags++;
							}

						}
						if (countFlags == this.num) {
							for(let k = 0; k < 8; k++) {
								const X = this.x + dfsMoveX[k];
								const Y = this.y + dfsMoveY[k];
								if (X >= 0 && Y >= 0 && X < rows && Y < rows) {
									if (!myGameboard.board[X][Y].flagged) {
										if (myGameboard.board[X][Y].bombed) {
											gameOver(0);
											break;
										}
										myGameboard.board[X][Y].reveal();
										if (myGameboard.board[X][Y].num == 0)
											dfs(X, Y);
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