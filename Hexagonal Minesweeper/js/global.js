let sqrt3 = Math.sqrt(3);

let myGameboard;
let Won = 0;

let canvasSize = 1000;
let boardRadius = 9;
let margin = 20;
let cellRadius = (canvasSize - 2 * margin) / (sqrt3 * (2*boardRadius + 1));

let dfsMoveQ = [-1, 0, 1, 1, 0, -1];
let dfsMoveR = [0, -1, -1, 0, 1, 1];

let bombCount = 40;
let bombRate = bombCount / (3 * boardRadius * (boardRadius + 1)  + 1);

let myFont;
let myFontSize = 1.3 * cellRadius;

let unrevealedBG = [192, 192, 192];
let flaggedBG;
let revealedBG = [192, 192, 192];
let bombBG;
let fillColor = [];
let numColors = [0, [0, 0, 255], [0, 129, 0], [255, 0, 0], [1, 1, 128], [128, 1, 1], [1, 128, 128]];

function preload() {
	myFont = loadFont('./assets/SVN-Determination Sans.otf')
}
