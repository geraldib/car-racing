var mouseX = 0;
var mouseY = 0;

function setupInput() {
	document.addEventListener('keydown', gameReset);
	document.addEventListener('keydown', handleGameOver);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	blueCar.setupInput(87, 68, 83, 65);
	greenCar.setupInput(38, 39, 40, 37);
}

function gameReset(evt){
	if(evt.keyCode === 13 && !gameRestart && !gameOver) {
		gameRestart = true;
		gameLoader = false;
		setTimeout(function () {
			gameLoader = true;
		}, 2000);
	}
}

function handleGameOver(evt){
	if(evt.keyCode === 13 && gameOver) {
		blueCar.score = 0;
		greenCar.score = 0;
		gameRestart = true;
		gameWinner = '';
		gameWinnerColor = 'white';
		gameLoader = false;
		setTimeout(function () {
			gameLoader = true;
		}, 2000);
		gameOver = false;
		gameLevelIndex = 0;
		loadLevel(allLevels[gameLevelIndex]);
	}
}

function keySet(keyEvent, whichCar, setTo){
	if(keyEvent.keyCode == whichCar.controlKeyLeft) {
		whichCar.keyHeld_TurnLeft = setTo;
	}
	if(keyEvent.keyCode == whichCar.controlKeyRight) {
		whichCar.keyHeld_TurnRight = setTo;
	}
	if(keyEvent.keyCode == whichCar.controlKeyUp) {
		whichCar.keyHeld_Gas = setTo;
	}
	if(keyEvent.keyCode == whichCar.controlKeyDown) {
		whichCar.keyHeld_Reverse = setTo;
	}
}

function keyPressed(evt) {
	keySet(evt,blueCar,true);
	keySet(evt,greenCar,true);
}

function keyReleased(evt) {
	keySet(evt,blueCar,false);
	keySet(evt,greenCar,false);
}