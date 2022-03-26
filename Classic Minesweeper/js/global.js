let myGameboard;
let gameover = 0;

let canvasSize = 500;
let rows = 16;
let margin = 20;
let width = (canvasSize - 2 * margin) / rows;

let dfsMoveX = [-1, -1, -1, 0, 1, 1, 1, 0];
let dfsMoveY = [-1, 0, 1, 1, 1, 0, -1, -1];

let bombCount = 40;
let bombRate = bombCount / (rows * rows);
