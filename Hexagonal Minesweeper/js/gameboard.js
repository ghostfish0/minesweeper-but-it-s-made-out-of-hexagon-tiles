class Gameboard {
	constructor(rows, bombRate) {
		this.rows = rows;
		this.bombRate = bombRate;
		this.board = [];
		this.revealedCount = 0;
	}

	generate() {
		for(let i = 0; i < rows; i++) {
			let currentRow = [];
			for(let j = 0; j < rows; j++) {
				currentRow.push(new Cell(i, j));
			}
			this.board.push(currentRow);
		}

		for(let i = 0; i < bombCount; i++) {
			let myCell = random(random(this.board));
			while (myCell.bombed)
				myCell = random(random(this.board));
			// console.log(myCell.y, myCell.x);
			myCell.bombed = 1;
		}
		for(let i = 0; i < rows; i++) 
			for(let j = 0; j < rows; j++)
				if (!this.board[i][j].bombed)
					this.board[i][j].fillNum();
	}
}