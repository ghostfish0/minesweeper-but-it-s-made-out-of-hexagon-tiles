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


	showFill() {
		const X = margin + this.x * width;
		const Y = margin + this.y * width;
		if (!this.revealed) {
			// fill(175, 129, 28);
			if (this.flagged)
				fill(255, 203, 61);
			else 
				fill(unrevealedBG);
			rect(X, Y, width);

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
			rect(X, Y, width);
		}
	}

	showText() {
		const X = margin + this.x * width + 1;
		const Y = margin + this.y * width - 2;
		if (this.revealed) {
			if (!this.bombed) {
				push();

				fill(255);
				noStroke();
				if (this.num > 0)
					text(this.num, X + width / 2 , Y + width / 2);

				pop();
			}
		else {
			push();

			fill(255);
			noStroke();
			text("X", X + width / 2 , Y + width / 2);

			pop();

		}
		}
		else {
			if (this.flagged) {
			push();

			fill(50);
			noStroke();
			text("F", X + width / 2 , Y + width / 2 - 1);

			pop();

			}
		}

	}

	show() {
		this.showFill();
		this.showText();
	}

	showHighlight() {
		const X = margin + this.x * width;
		const Y = margin + this.y * width;
		const k = 30;
		if (this.flagged || (this.bombed && this.revealed))
			return 0;
		if (!this.revealed)
			fill(unrevealedBG[0] +  k, unrevealedBG[1] + k, unrevealedBG[2] + k);
		if (this.revealed)
			fill(revealedBG[0] +  k, revealedBG[1] + k, revealedBG[2] + k);
		rect(X, Y, width);
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