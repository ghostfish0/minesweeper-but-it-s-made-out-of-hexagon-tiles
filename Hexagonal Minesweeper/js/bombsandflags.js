function drawBomb(x, y, r) {
	push();
	fill(0);
	let unit = r / 6.0;
	rect(x - 2.5 * unit, y - 4.5 * unit, 5 * unit, 9 * unit);
	rect(x - 4.5 * unit, y - 2.5 * unit, 9 * unit, 5 * unit);

	rect(x - 3.5 * unit, y - 3.5 * unit, 7 * unit);

	rect(x - 0.5 * unit, y - 5.5 * unit, unit, 11 * unit);
	rect(x - 5.5 * unit, y - 0.5 * unit, 11 * unit, unit);

	rect(x - 4.5 * unit, y - 4.5 * unit, unit, unit);
	rect(x + 3.5 * unit, y - 4.5 * unit, unit, unit);
	rect(x - 4.5 * unit, y + 3.5 * unit, unit, unit);
	rect(x + 3.5 * unit, y + 3.5 * unit, unit, unit);

	fill(255);
	rect(x - 2.5 * unit, y - 2.5 * unit, 2 * unit);

	pop();
}

function drawFlag(x, y, r) {
	push();

	fill(0);
	let unit = r / 6.0;
	rect(x - 0.5 * unit, y - 4 * unit, 2*unit, 9 * unit);
	rect(x - 3.5 * unit, y + 3.5 * unit, 8*unit, 2 * unit);
	rect(x - 2 * unit, y + 2.5 * unit, 5*unit, 2 * unit);

	fill('red');
	triangle(x + 1.5 * unit, y - 5.5 * unit, x + 1.5 * unit, y + 0.5 * unit, x - 3.5 * unit, y - 2.5 * unit); 
	pop();
}