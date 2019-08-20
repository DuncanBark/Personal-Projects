let width = 400;
let height = 400;

let numSpots = 100;
let numMines = 20;

let field = [];

let numbers = [-11, -10, -9, -1, 1, 9, 10, 11];
let numbers2 = [-10, -1, 1, 10]

function setup() {
	createCanvas(width, height);
	createField();
	drawField();
}

function createField(){
	for (i = 0; i < 100; i++){
		field[i] = new Spot(width, height, 10, 10);
	}

	for (i = 0; i < numMines; i++){
		let ranSpot = floor(random(numSpots));
		let curSpot = field[ranSpot];
		//console.log(curSpot);
		if (!curSpot.retMine()) {
			curSpot.giveMine();
		}
	}
}

function mousePressed(){
	let mx = mouseX;
	let my = mouseY;
	let index = floor(mx / 40) + (floor((my / 40)) * 10);
	console.log(mx, my, index);
	console.log(field[index]);
	uncover(index);
}

function uncover(idx){
	//TODO Fix flooding and edgecases
	(field[idx]).show((20 + ((idx % 10) * 40)), (20 + ((floor(idx / 10)) * 40)));
	if ((field[idx]).retMine()){
		revealAll();
	} else if ((field[idx]).getNearby() == 0){
		for (j = 0; j < numbers.length; j++){
			try {
				if (!(field[idx+numbers[j]]).retMine()){
					console.log(idx+numbers[j]);
					uncover(idx+numbers[j]);
				}
			} catch (Exception) {}
		}
	} else {
		(field[idx]).show((20 + ((idx % 10) * 40)), (20 + ((floor(idx / 10)) * 40)));
	}
}

function calcMines(){
	//TODO Fix edgecases
	for (i = 0; i < numSpots; i++){
		try {
			for (j = 0; j < numbers.length; j++){
				if ((field[i+numbers[j]]).retMine()){
					(field[i]).incrNearby();
				}
			}
		} catch (Exception){}
	}
}

function drawField(){
	background(220);
	for (i = 0; i < numSpots; i++){
		let drawSpot = field[i];
		if (!drawSpot.isRevealed()){
			if (drawSpot.retMine()){
				fill(255, 0, 0);
			} else {
				fill(0, 0, 0);
			}
			let dims = drawSpot.getWH();
			let sWidth = dims[0];
			let sHeight = dims[1];
			let x = (i % 10) * sWidth;
			let y = floor((i / 10)) * sHeight;
			rect(x, y, sWidth-2, sHeight-2);
		}
	}
	calcMines();
}

function draw() {


}