var cookies = 0;
var biscuits = 0;
var grandmas = 0;
var prestige = 1;

function cookieClick(num){
	cookies = cookies + num;
	document.getElementById("cookies").innerHTML = cookies;
}

function buyGrandma(){
	var grandmaCost = Math.floor(10 * Math.pow(1.1, grandmas))
	if (cookies >= grandmaCost) {
		grandmas = grandmas + 1;
		cookies = cookies - grandmaCost;
		document.getElementById("grandmas").innerHTML = grandmas;
		document.getElementById("cookies").innerHTML = cookies;
	}
	var grandmaCostNew = Math.floor(10 * Math.pow(1.1, grandmas))
	document.getElementById("grandmaCost").innerHTML = grandmaCostNew;
	document.getElementById("grandmaEarning").innerHTML = grandmas;
}

function biscuitClick(num){
	biscuits = biscuits + num;
	document.getElementById("biscuits").innerHTML = biscuits;
}







function save(){
	var save = {
		cookies: cookies,
		biscuits: biscuits,
		grandmas: grandmas,
		prestige: prestige
	}
	localStorage.setItem("save", JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	console.log(savegame)
	if (savegame !== null){
		if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
		if (typeof savegame.biscuits !== "undefined") biscuits = savegame.biscuits;
		if (typeof savegame.grandmas !== "undefined") grandmas = savegame.grandmas;
		if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
	} 
	else {
		cookies = 0;
		biscuits = 0;
		grandmas = 0;
		prestige = 1;
	}
}

function deleteSave(){
	localStorage.removeItem("save");
	load();
}

window.setInterval(function(){
cookieClick(grandmas);






}, 1000);