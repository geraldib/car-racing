var canvas, canvasContext;

var blueCar  = new Car();
var greenCar = new Car();

var gameRestart = true;
var gameWinner = '';
var gameWinnerColor = 'white';
var gameLoader = false;

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

	if (gameLoader) {
		if (gameRestart) {
			moveAll();
		} else {
			drawWinningScreen();
		}
	} else {
		drawSignalStart();
	}

}

function moveAll() {
	blueCar.move();
	greenCar.move();
}

function drawWinningScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'rgba(0, 0, 0, 0.4)');
	colorText(gameWinner, canvas.width/2 - 200, canvas.height/2, gameWinnerColor);
	colorText('Press "Enter" to Restart', canvas.width/2 - 370, canvas.height/2 + 100, 'white');
}

function drawSignalStart() {
	colorRect(0,0, canvas.width,canvas.height, 'rgba(0, 0, 0, 0.4)');
	colorText('Ready', canvas.width/2 - 100, canvas.height/2, '#7fd496');
}

function drawAll() {
	drawTracks();
	blueCar.draw();
	greenCar.draw();
} 