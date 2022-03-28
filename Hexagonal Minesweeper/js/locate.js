function locate(x, y) {
	let minDistance = [0, 0, dist(canvasSize /2, canvasSize /2, x, y)];
	myGameboard.board.forEach(myQ => {
		myQ.forEach(myCell => {
			const d = dist(x, y, myCell.centerX, myCell.centerY); 
			if (d < minDistance[2])
				minDistance = [myCell.q, myCell.r, d];
		})
	});

	return qr2xy(minDistance[0], minDistance[1]);


}