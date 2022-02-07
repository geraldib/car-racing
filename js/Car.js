

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.3;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

class Car {

	constructor(image) {

		this.score = 0;
		this.isDestroyed = false;

		this.gear;

		this.x = 75;
		this.y = 75;
		this.ang = 0;
		this.speed = 0;

		this.startingPosX = 75;
		this.startingPosY = 75;

		this.carPic;
		this.carPlayer;
		this.carColor;

		this.keyHeld_Gas = false;
		this.keyHeld_Reverse = false;
		this.keyHeld_TurnLeft = false;
		this.keyHeld_TurnRight = false;

		this.controlKeyUp;
		this.controlKeyDown;
		this.controlKeyLeft;
		this.controlKeyRight;
  	}

  	setupInput(upKey, rightKey, downKey, leftKey) {
  		this.controlKeyUp = upKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft =leftKey;
		this.controlKeyRight = rightKey;
  	}

	playerStartPlace(){
		for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
					trackGrid[arrayIndex] = TRACK_ROAD;
					this.ang = -Math.PI/2;
					this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
					this.startingPosX = this.x;
					this.startingPosY = this.y;
					return;
				}
			}
		}
	}

	reset(image, player, color) {
		this.carPic = image;
		this.carPlayer = player;
		this.carColor = color;
		this.speed = 0;
		this.isDestroyed = false;
		this.playerStartPlace();
	}

	move() {
		this.speed *= GROUNDSPEED_DECAY_MULT;

		if(this.keyHeld_Gas) {
			this.speed += DRIVE_POWER;
			this.gear = 'forward';
		}
		if(this.keyHeld_Reverse) {
			this.speed -= REVERSE_POWER;
			this.gear = 'reverse';
		}
		if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
			if (this.gear === 'forward') {
				if(this.keyHeld_TurnLeft) {
					this.ang -= TURN_RATE;
				}
				if(this.keyHeld_TurnRight) {
					this.ang += TURN_RATE;
				}
			} else {
				if(this.keyHeld_TurnLeft) {
					this.ang += TURN_RATE;
				}
				if(this.keyHeld_TurnRight) {
					this.ang -= TURN_RATE;
				}
			}
		}

		if (this.isDestroyed) {
			this.speed = 0;
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;

		carTrackHandling(this);
	}

	draw() {
		if (!this.isDestroyed) {
			drawBitmapCenteredWithRotation(this.carPic, this.x,this.y, this.ang);
		}
	}

	destroyed(){
		this.isDestroyed = true;
	}

	respawn() {
		this.x = this.startingPosX;
		this.y = this.startingPosY;
		this.ang = -Math.PI/2;
		this.isDestroyed = false;
	}

}


