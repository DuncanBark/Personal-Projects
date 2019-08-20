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
		this.shown = false;
	}

	show(){
		console.log(flagCount);
		if (this.flag && !this.revealed && flagCount > 0){
			textAlign(CENTER, CENTER);
			textSize(35);
			fill(255, 0, 0);
			text("X", this.x+this.w/2, this.y+this.w/2);
		}
		if (this.shown) {
			// if (!this.revealed){
			// 	fill(255);
			// 	rect(this.x, this.y, this.w, this.w);
			// }
			if (!this.mine){
				if (this.numNearby == 0){
					fill(230);
					rect(this.x, this.y, this.w-2, this.w-2);
				} else {
					fill(230);
					rect(this.x, this.y, this.w-2, this.w-2);
					fill(0);
					textAlign(CENTER, CENTER);
					textSize(25);
					text(this.numNearby, this.x+this.w/2, this.y+this.w/2);
				}
			} else {
				fill(230);
				rect(this.x, this.y, this.w-2, this.w-2);
				fill(255, 0, 0);
				ellipse(this.x+this.w/2, this.y+this.w/2, this.w/1.5);
			}	
		}
	}

	prelimShow(){
		fill(255);
		rect(this.x, this.y, this.w-2, this.w-2);
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

	hasMine(){
		return this.mine;
	}

	setflag(){
		if (this.flag){
			flagCount++;
			this.flag = false;
			fill(255);
			rect(this.x, this.y, this.w-2, this.w-2);
		} else if (!this.flag){
			this.flag = true;
		}
		this.show();
	}

	showAll(){
		if (!this.shown){
			this.shown = true;
			this.revealed = true;
			this.show();
		}
	}

	reveal(){
		if (!this.shown && !this.flag){
			this.shown = true;
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
		this.show();
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