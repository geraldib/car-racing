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

		{trackType: TRACK_ROAD,    theFile: "./images/track_road.png"},
		{trackType: TRACK_WALL,    theFile: "./images/track_wall.png"},
		{trackType: TRACK_FLAG,    theFile: "./images/track_flag.png"},
		{trackType: TRACK_TREE,    theFile: "./images/track_tree.png"},
		{trackType: TRACK_GOAL,    theFile: "./images/track_goal.png"},
		{trackType: TRACK_FAN_GIRL, theFile: "./images/track_fan_girl.png"},
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