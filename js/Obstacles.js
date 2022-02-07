function handleObstacleByTile(tileHere, car, carTrackCol,carTrackRow) {

    switch (tileHere) {
        case TRACK_GOAL:
            handleWinner(car);
          break;
        case wallTile(tileHere):
            handleWallTiles(car);
          break;
        case TRACK_LAVA:
            handleLavaTile(car, carTrackCol, carTrackRow);
          break;
        case TRACK_DIRT:
            handleDirtTiles(car);
          break;  
      }

}

function wallTile(tileHere) {
    if(	tileHere == TRACK_FLAG || 
        tileHere == TRACK_TREE || 
        tileHere == TRACK_HORROR_TREE || 
        tileHere == TRACK_WALL_CASTLE ||
        tileHere == TRACK_WALL ||
        tileHere == TRACK_MOUNTAIN) {
            return tileHere;
        }
}

function handleWallTiles(car){
    car.x -= Math.cos(car.ang) * car.speed;
    car.y -= Math.sin(car.ang) * car.speed;
    car.speed *= -0.5;
}

function handleLavaTile(car, carTrackCol, carTrackRow) {
    car.destroyed();
    canvasContext.drawImage(trackPics[TRACK_LAVA_CAR], carTrackCol * TRACK_H, carTrackRow* TRACK_W);
    setTimeout(function () {
        car.respawn();
    }, 1000);
}

function handleDirtTiles(car){
    car.speed *= 0.5;
}