let sqrt3 = Math.sqrt(3);

let myGameboard;
let gameover = 0;
let Won = 0;

let canvasSize = 1000;
let boardRadius = 9;
let margin = 20;
let cellRadius = (canvasSize - 2 * margin) / (sqrt3 * (2*boardRadius + 1));

let dfsMoveQ = [-1, 0, 1, 1, 0, -1];
let dfsMoveR = [0, -1, -1, 0, 1, 1];

let bombCount = 55;
let bombRate = bombCount / (3 * boardRadius * (boardRadius + 1)  + 1);

let myFont;
let myFontSize = 0.7 * cellRadius;

let unrevealedBG = [82, 123, 199];
let flaggedBG;
let revealedBG = [50, 50, 50];
let bombBG;
let fillColor = [];

function preload() {
	myFont = loadFont('./assets/SVN-Determination Sans.otf')
}