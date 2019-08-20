var money = 20;
var fame = 0;
var amzRep = 0;
var genrockRep = 0;
// var bodytubeCost = 0;
// var motortubeCost = 0;
// var motorCost = 0;
// var noseconeCost = 0;
var amzParts = {
	amzBT: 0,
	amzMT: 0,
	amzM: 0,
	amzNC: 0
}
var numBT = 1;
var numMT = 1;
var numMotor = 1;
var numNC = 1;
var genParts = {
	genBT: 0,
	genMT: 0,
	genM: 0,
	genNC: 0
}

function amzBuy(item){
	//buy given item from amazon
	switch (item) {
		case amzBT:
			amzParts.amzBT += 1;
			break;
		case amzMT:
			amzParts.amzMT += 1;
			break;
		case amzM:
			amzParts.amzM += 1;
			break;
		case amzNC:
			amzParts.amzNC += 1;
			break;

	}
}

function genrockBuy(item){
	//buy given item from generic rockets
}

// function buyBT(){
// 	numBT = numBT + 1;
// 	parts.bodytube = numBT;
// }

// function buyMT(){
// 	numMT = numMT + 1;
// 	parts.motortube = numMT;
// }

// function buyMotor(){
// 	numMotor = numMotor + 1;
// 	parts.motor = numMotor;
// }

// function buyNC(){
// 	numNC = numNC + 1;
// 	parts.nosecone = numNC;
// }

function fly(){
	var maxalt = (parts.motor * 10) - (parts.nosecone * 2);
	var maxvel = (parts.motor * 5) - (parts.nosecone * 4);
	var maxaccel = ((parts.motor * 8) - (parts.nosecone * 6))/10.0;
	var moneyearned = Math.ceil((maxalt + maxvel + maxaccel)/10);
	money = money + moneyearned;
	var fameearned = (maxalt + maxvel + maxaccel)/22.5;
	fameearned = ((fameearned.toFixed(2)) * 1.0)
	fame = fame + fameearned;

	document.getElementById("maxAlt").innerHTML = maxalt;
	document.getElementById("maxVel").innerHTML = maxvel;
	document.getElementById("maxAccel").innerHTML = maxaccel;
	document.getElementById("money").innerHTML = money;
	document.getElementById("fame").innerHTML = fame;
	document.getElementById("moneyEarned").innerHTML = moneyearned;
	document.getElementById("fameEarned").innerHTML = fameearned;
}