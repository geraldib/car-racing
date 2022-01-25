var canvas, canvasContext;

var blueCar  = new Car();
var greenCar = new Car();

var gameRestart = true;
var gameWinner = '';
var gameWinnerColor = 'white';
var gameLoader = false;
var gameOver = false;

var gameLevelIndex = 0;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width, canvas.height, 'black') ;
	colorText("LOADING IMAGES", canvas.width/2 - 300, canvas.height/2, 'white');

	loadImages();

	setTimeout(function () {
		gameLoader = true;
	}, 2000);

}

function startGame(){
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	setupInput();
	loadLevel(levelOne);
}

function loadLevel(level){
	trackGrid = [...level];
	blueCar.reset(carPicP1, 'Player 1', 'blue');
	greenCar.reset(carPicP2, 'Player 2', '#75ff6e');
}

function updateAll() {
	drawAll();

	if (!gameOver) {
		if (gameLoader) {
			if (gameRestart) {
				moveAll();
			} else {
				drawWinningScreen();
			}
		} else {
			drawSignalStart();
		}
	} else {
		drawGameOverScreen();
	}

}

function moveAll() {
	blueCar.move();
	greenCar.move();
}

function drawAll() {
	drawTracks();
	blueCar.draw();
	greenCar.draw();
} 