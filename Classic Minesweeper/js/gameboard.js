class Gameboard {
	constructor(rows, bombRate) {
		this.rows = rows;
		this.bombRate = bombRate;
		this.board = [];
	}

	generate() {
		for(let i = 0; i < rows; i++) {
			let currentRow = [];
			for(let j = 0; j < rows; j++) {
				currentRow.push(new Cell(i, j));
			}
			this.board.push(currentRow);
		}
	}
	fillNum() {
		for(let i = 0; i < rows; i++) 
			for(let j = 0; j < rows; j++)
				if (!this.board[i][j].bombed)
					this.board[i][j].fillNum();
	}
}