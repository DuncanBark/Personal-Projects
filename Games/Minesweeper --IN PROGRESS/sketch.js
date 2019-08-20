let width = 600;
let height = 600;

let cols = 15;
let rows = 15;

let plotWidth = width/cols;

let numMines = (cols * rows) / 10;

let field = make2DArray(cols, rows);

function make2DArray(col, row){
	let arr = new Array(col);
	for (i = 0; i < arr.length; i++){
		arr[i] = new Array(row);
	}
	return arr;
}

function setup(){
	createCanvas(width, height);

	for (i = 0; i<field.length; i++){
		for (j = 0; j<field[0].length; j++){
			field[i][j] = new Plot(i, j, plotWidth);
		}
	}

	addMines(numMines);

	for (i = 0; i<field.length; i++){
		for (j = 0; j<field[0].length; j++){
			field[i][j].setNearby(field[i][j].countMines());
		}
	}
}

function mousePressed(){
	let mi = floor(mouseX/plotWidth);
	let mj = floor(mouseY/plotWidth);
	console.log(mouseX, mouseY, mi, mj);
	if (mouseButton === LEFT){
		(field[mi][mj]).reveal();
	} else if (mouseButton === CENTER){
		(field[mi][mj]).setflag();
	}
}

function revealAll(){
	for (i = 0; i<field.length; i++){
		for (j = 0; j<field[0].length; j++){
			field[i][j].reveal();
		}
	}
}

function addMines(mineCount){
	for (i = 0; i < mineCount; i++){
		let ranx = floor(random(cols));
		let rany = floor(random(rows));
		field[ranx][rany].giveMine();
	}
}

function draw(){
	background(255);
	for (i = 0; i<field.length; i++){
		for (j = 0; j<field[0].length; j++){
			field[i][j].show();
		}
	}
}