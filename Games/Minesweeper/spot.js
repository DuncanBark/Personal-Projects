class Spot{

	constructor(w, h, spotsx, spotsy){
		this.width = w / spotsx;
		this.height = h / spotsy;
		this.hasMine = false;
		this.numNearby = 0;
		this.revealed = false;
	}

	giveMine(){
		this.hasMine = true;
	}

	isRevealed(){
		return this.revealed;
	}

	updateNearby(newNum){
		this.numNearby = newNum;
	}

	getNearby(){
		return this.numNearby;
	}

	incrNearby(){
		this.numNearby += 1;
	}

	retMine(){
		return this.hasMine;
	}

	getWH(){
		return [this.width, this.height];
	}

}