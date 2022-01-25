function handleWinner(winner){
	gameLevelIndex++;
    winner.score++;
    if (allLevels.length > gameLevelIndex) {
        gameWinner = winner.carPlayer + ' Won!';
        gameWinnerColor = winner.carColor;
        gameRestart = false;
        loadLevel(allLevels[gameLevelIndex]);
    } else {
        gameOver = true;
    }
}

function drawWinningScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'rgba(0, 0, 0, 0.6)');
    colorText('Score ' + blueCar.score + ' - '+ greenCar.score, canvas.width/2 - 150, canvas.height/2 - 100, '#f5f7d0');
	colorText(gameWinner, canvas.width/2 - 200, canvas.height/2, gameWinnerColor);
	colorText('Press "Enter" to Restart', canvas.width/2 - 370, canvas.height/2 + 100, '#f5f7d0');
}

function drawGameOverScreen() {
    colorRect(0,0, canvas.width,canvas.height, 'rgba(0, 0, 0, 0.6)');
    colorText('Score ' + blueCar.score + ' - '+ greenCar.score, canvas.width/2 - 150, canvas.height/2 - 100, '#f5f7d0');
    if (blueCar.score > greenCar.score) {
        colorText('Best Score: Player-1', canvas.width/2 - 320, canvas.height/2, blueCar.carColor);
    } else {
        colorText('Best Score: Player-2', canvas.width/2 - 320, canvas.height/2, greenCar.carColor);
    }
    colorText('Press "Enter" to Restart', canvas.width/2 - 370, canvas.height/2 + 100, '#f5f7d0');
}

function drawSignalStart() {
	colorRect(0,0, canvas.width,canvas.height, 'rgba(0, 0, 0, 0.6)');
	colorText('Ready', canvas.width/2 - 100, canvas.height/2, '#f5f7d0');
}