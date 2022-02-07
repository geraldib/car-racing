const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

var trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_FLAG = 3;
const TRACK_TREE = 4;
const TRACK_GOAL = 5;
const TRACK_WALL_DESTROYED = 6;
const TRACK_HORROR_TREE = 7;
const TRACK_WALL_CASTLE = 8;
const TRACK_LAVA = 9;
const TRACK_LAVA_CAR = 10;
const TRACK_DIRT = 11;
const TRACK_MOUNTAIN = 12;



function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return trackGrid[trackIndexUnderCoord];
	} else {
		return TRACK_WALL;
	}
}

function carTrackHandling(car) {
	var carTrackCol = Math.floor(car.x / TRACK_W);
	var carTrackRow = Math.floor(car.y / TRACK_H);
	// var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS && carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );
		handleObstacleByTile(tileHere, car, carTrackCol,carTrackRow);
	} // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {

	var arrayIndex = 0; 
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
			var tileKind = trackGrid[arrayIndex];
			var useImg = trackPics[tileKind];
			canvasContext.drawImage(useImg, drawTileX,drawTileY);
			drawTileX += TRACK_W;
			arrayIndex++;
		} // end of for each col
		drawTileX = 0;
		drawTileY += TRACK_H;
	} // end of for each row

} // end of drawTracks func


