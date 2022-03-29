class Game {
	constructor() {
		this.board = [];
		this.over = 0;
		this.revealedCount = 0;
		this.flaggedCount = 0;
		this.timePassed = 0;
		this.won = 0;
	}

	generate() {
		this.board = [];
		this.over = 0;
		this.revealedCount = 0;
		this.flaggedCount = 0;
		this.timePassed = 0;
		this.won = 0;
		for(let q = -boardRadius; q <= 0; q++) {
			let currentQ = [];
			for(let r = -boardRadius - q; r <= boardRadius; r++) {
				currentQ.push(new Cell(q, r));
			}
			this.board.push(currentQ);
		}
		for(let q = 1; q <= boardRadius; q++) {
			let currentQ = [];
			for(let r = -boardRadius; r <= boardRadius - q; r++) {
				currentQ.push(new Cell(q, r));
			}
			this.board.push(currentQ);
		}

		for(let i = 0; i < bombCount; i++) {
			let myCell = random(random(this.board));
			while (myCell.bombed)
				myCell = random(random(this.board));
			myCell.bombed = 1;
		}
		
		this.board.forEach(myQ => {
			myQ.forEach(myCell => {
				myCell.fillNum();
			})
		})
	}
}