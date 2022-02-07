var carPicP1  = document.createElement("img");
var carPicP2  = document.createElement("img");

var trackPics = [];

function countLoadedImagesAndStart(){
	picsToLoad--;
	if (picsToLoad == 0) {
		startGame();
	}
}

function beginLoadImage(imgVar, fileName){
	imgVar.onload = countLoadedImagesAndStart();
	imgVar.src = fileName;
}

function loadImageForTracks(trackCode, fileName){
	trackPics[trackCode] = document.createElement('img');
	beginLoadImage(trackPics[trackCode], fileName);
}

function loadImages() {

	var imageList = [
		{varName: carPicP1,     theFile: "./images/player1car.png"},
		{varName: carPicP2,     theFile: "./images/player2car.png"},

		{trackType: TRACK_ROAD,    			theFile: "./images/track_road.png"},
		{trackType: TRACK_WALL,    			theFile: "./images/track_wall.png"},
		{trackType: TRACK_FLAG,    			theFile: "./images/track_flag.png"},
		{trackType: TRACK_TREE,          	theFile: "./images/track_tree.png"},
		{trackType: TRACK_GOAL,           	theFile: "./images/track_goal.png"},
		{trackType: TRACK_WALL_DESTROYED, 	theFile: "./images/track_wall_destroyed.png"},
		{trackType: TRACK_HORROR_TREE, 		theFile: "./images/track_horror_tree.png"},
		{trackType: TRACK_WALL_CASTLE, 		theFile: "./images/track_wall_castle.png"},
		{trackType: TRACK_DIRT, 			theFile: "./images/track_dirt.png"},
		{trackType: TRACK_LAVA, 			theFile: "./images/track_lava.png"},
		{trackType: TRACK_LAVA_CAR, 		theFile: "./images/track_lava_car.png"},
		{trackType: TRACK_MOUNTAIN, 		theFile: "./images/track_mountain.png"},
	];

	picsToLoad = imageList.length;

	for (var i = 0; i<imageList.length; i++) {
		if (imageList[i].varName != undefined) {
			beginLoadImage(imageList[i].varName,  imageList[i].theFile);
		} else {
			loadImageForTracks(imageList[i].trackType, imageList[i].theFile);
		}
	}
}