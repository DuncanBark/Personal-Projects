let width = 600;
let height = 600;

let cols = 15;
let rows = 15;

let plotWidth = width/cols;

let numMines = Math.floor((cols * rows) / 10);
let flagCount = numMines;

let field = make2DArray(cols, rows);

let flagImg;

function preload(){
	flagImg = loadImage('Assets/minesweeperflag.png');
}

function make2DArray(col, row){
	let arr = new Array(col);
	for (i = 0; i < arr.length; i++){
		arr[i] = new Array(row);
	}
	return arr;
}

function setup(){
	background(255);
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
			field[i][j].prelimShow();
		}
	}

	drawField();
}

function mousePressed(){
	let mi = floor(mouseX/plotWidth);
	let mj = floor(mouseY/plotWidth);
	//console.log(mouseX, mouseY, mi, mj);
	if (mouseButton === LEFT){
		(field[mi][mj]).reveal();
	} else if (mouseButton === CENTER){
		(field[mi][mj]).setflag(flagImg);
	}
}

function revealAll(){
	for (i = 0; i<field.length; i++){
		for (j = 0; j<field[0].length; j++){
			field[i][j].showAll();
		}
	}
}

function addMines(mineCount){
	for (i = 0; i < mineCount; i++){
		let ranx = floor(random(cols));
		let rany = floor(random(rows));
		if (!field[ranx][rany].hasMine()){
			field[ranx][rany].giveMine();
		} else {
			i--;
		}
	}
}

function drawField(){
	for (i = 0; i<field.length; i++){
		for (j = 0; j<field[0].length; j++){
			field[i][j].show();
		}
	}
}