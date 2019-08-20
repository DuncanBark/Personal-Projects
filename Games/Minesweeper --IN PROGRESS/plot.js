class Plot{

	constructor(i, j, w){
		this.i = i;
		this.j = j;
		this.w = w;

		this.x = i * w;
		this.y = j * w;

		this.revealed = false;
		this.mine = false;
		this.numNearby = 0;
		this.flag = false;
	}

	show(){ 
		if (this.flag){
			textAlign(CENTER, CENTER);
			textSize(35);
			fill(255, 0, 0);
			text("X", this.x+this.w/2, this.y+this.w/2);
		}else if (!this.revealed){
			fill(255);
			//rectMode(CENTER);
			rect(this.x, this.y, this.w, this.w);
		} else if (!this.mine){
			if (this.numNearby == 0){
				fill(230);
				rect(this.x, this.y, this.w, this.w);
			} else {
				fill(230);
				rect(this.x, this.y, this.w, this.w);
				fill(0);
				textAlign(CENTER, CENTER);
				textSize(25);
				text(this.numNearby, this.x+this.w/2, this.y+this.w/2);
			}
		} else {
			fill(255, 0, 0);
			//ellipseMode(CORNERS);
			ellipse(this.x+this.w/2, this.y+this.w/2, this.w/1.5);
		}
	}

	countMines(){
		if (!this.mine){
			let numMines = 0;

			for (let xChange = -1; xChange <= 1; xChange++){
				let newI = this.i + xChange;
				if (newI < 0 || newI >= cols){
					continue;
				}
				for (let yChange = -1; yChange <= 1; yChange++){
					let newJ = this.j + yChange;
					if (newJ < 0 || newJ >= rows){
						continue;
					}

					let tempSpot = field[newI][newJ];
					if (tempSpot.mine){
						numMines++;
					}
				}
			}
			return numMines;
		} else {
			return -1;
		}
	}

	giveMine(){
		this.mine = true;
	}

	setflag(){
		this.flag = !this.flag;
	}

	reveal(){
		if (!this.revealed){
			this.revealed = true;
			if (this.mine){
				revealAll();
			} else if (this.numNearby == 0){
			//flood
			this.floodFill();
		}
	}
}

floodFill(){
	for (let xChange = -1; xChange <= 1; xChange++){
		let newI = this.i + xChange;
		if (newI < 0 || newI >= cols){
			continue;
		}
		for (let yChange = -1; yChange <= 1; yChange++){
			let newJ = this.j + yChange;
			if (newJ < 0 || newJ >= rows){
				continue;
			}

			let tempSpot = field[newI][newJ];
			if (!tempSpot.revealed){
				tempSpot.reveal();
			}
		}
	}
}

setNearby(val){
	this.numNearby = val;
}




}