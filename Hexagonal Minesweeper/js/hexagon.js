function hexagon(x, y, r) {
	beginShape();
	for(let i = 0; i < 6; i++) {
		const X = x + r * cos(i * TAU / 6.0);
		const Y = y + r * sin(i * TAU / 6.0);
		vertex(X, Y);
	}
	endShape(CLOSE);
}
/*int pnpoly(int nvert, float *vertx, float *verty, float testx, float testy)
{
  int i, j, c = 0;
  for (i = 0, j = nvert-1; i < nvert; j = i++) {
    if ( ((verty[i]>testy) != (verty[j]>testy)) &&
     (testx < (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
       c = !c;
  }
  return c;
}*/