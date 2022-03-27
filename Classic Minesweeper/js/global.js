let myGameboard;
let gameover = 0;
let Won = 0;

let canvasSize = 500;
let rows = 16;
let margin = 20;
let width = (canvasSize - 2 * margin) / rows;

let dfsMoveY = [-1, -1, -1, 0, 1, 1, 1, 0];
let dfsMoveX = [-1, 0, 1, 1, 1, 0, -1, -1];

let bombCount = 10;
let bombRate = bombCount / (rows * rows);

let myFont;
let myFontSize = 0.6 * width;

let unrevealedBG = [82, 123, 199];
let flaggedBG;
let revealedBG = [50, 50, 50];
let bombBG;
let fillColor = [];

function preload() {
	myFont = loadFont('./assets/SVN-Determination Sans.otf')
}