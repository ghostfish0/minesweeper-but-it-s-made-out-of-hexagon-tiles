function qr2xy(q, r) {
	if (q <= 0)
		return [q + boardRadius, r + q + boardRadius];
	else
		return [q + boardRadius, r + boardRadius];
}

function isValid(q, r) {
	if (q < -boardRadius || boardRadius < q)
		return 0;
	if (q <= 0) {
		if (r < -boardRadius - q || r > boardRadius)
			return 0;
	}
	else {
		if (r < -boardRadius || r > boardRadius - q)
			return 0;
	}

	return 1;

}