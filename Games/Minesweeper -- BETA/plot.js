class Plot{

	constructor(i, j, w){
		this.grass = color(0, 110, 30);
		this.dirt = color(134, 89, 45);

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
		//console.log(flagCount);
		// if (this.flag && !this.revealed && flagCount > 0){
		// 	textAlign(CENTER, CENTER);
		// 	textSize(35);
		// 	fill(255, 0, 0);
		// 	text("X", this.x+this.w/2, this.y+this.w/2);
		// }
		if (this.shown) {
			if (!this.mine){
				if (this.numNearby == 0){
					this.drawRect(this.dirt, this.x, this.y, this.w, this.w);
				} else {
					this.drawRect(this.dirt, this.x, this.y, this.w, this.w);
					fill(0);
					textAlign(CENTER, CENTER);
					textSize(25);
					text(this.numNearby, this.x+this.w/2, this.y+this.w/2);
				}
			} else {
				this.drawRect(this.dirt, this.x, this.y, this.w, this.w);
				fill(255, 0, 0);
				ellipse(this.x+this.w/2, this.y+this.w/2, this.w/1.5);
			}	
		}
	}

	prelimShow(){
		this.drawRect(this.grass, this.x, this.y, this.w, this.w);
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

	setflag(flagImg){
		if (this.flag){
			flagCount++;
			this.flag = false;
			this.drawRect(this.grass, this.x, this.y, this.w, this.w);
			fill(this.dirt);
			strokeWeight(1);
			ellipse(this.x+this.w/2, this.y+this.w/2, this.w/4, this.w/4);
		} else if (!this.flag){
			this.drawRect(this.grass, this.x, this.y, this.w, this.w);
			image(flagImg, this.x, this.y);
			flagCount--;
			this.flag = true;
		}
		this.show();
	}

	drawRect(c, x, y, width, height){
		fill(c);
		rect(x, y, width, height);
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