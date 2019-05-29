//Index for each square and its color
var set = [true, true, true, true, true, true, true, true, true];
//resets the board
function reset() {
	set = [true, true, true, true, true, true, true, true, true];
	setColors();
}
//sets all the colors correctly
function setColors() {
	for (var i = 0; i<9; i++) {
	document.getElementById(i).className = invertColor(i);
	}
}
//this function is called on to set the correct class for each square so that it is inverted correctly
function invertColor(index) {
	if (set[index] === false) {
		return "pbg";
	} else if (set[index] === true) {
		return "pbr";
	}
}

//these functions will alter the index of the correct squares, and then run the script to update the html for any given button press.

function c0() {
	set[0] = !set[0];
	set[1] = !set[1];
	set[3] = !set[3];
	setColors();
		winCheck();
}
function c1() {
	set[0] = !set[0];
	set[1] = !set[1];
	set[2] = !set[2];
	set[4] = !set[4];
	setColors();
		winCheck();
}
function c2() {
	set[1] = !set[1];
	set[2] = !set[2];
	set[5] = !set[5];
	setColors();
		winCheck();
}
function c3() {
	set[0] = !set[0];
	set[4] = !set[4];
	set[6] = !set[6];
	set[3] = !set[3];
	setColors();
		winCheck();
}
function c4() {
	set[4] = !set[4];
	set[3] = !set[3];
	set[5] = !set[5];
	set[7] = !set[7];
	set[1] = !set[1];
	setColors();
		winCheck();
}
function c5() {
	set[5] = !set[5];
	set[2] = !set[2];
	set[4] = !set[4];
	set[8] = !set[8];
	setColors();
		winCheck();
}
function c6() {
	set[6] = !set[6];
	set[3] = !set[3];
	set[7] = !set[7];
	setColors();
		winCheck();
}
function c7() {
	set[7] = !set[7];
	set[6] = !set[6];
	set[4] = !set[4];
	set[8] = !set[8];
	setColors();
		winCheck();
}
function c8() {
	set[8] = !set[8];
	set[7] = !set[7];
	set[5] = !set[5];
	setColors();
		winCheck();
}

//Checks if the puzzle has been completed
function winCheck() {
	var compareSet = [false, false, false, false, false, false, false, false, false, ]
if (set[0] === compareSet[0]) {
if (set[1] === compareSet[1]) {
if (set[2] === compareSet[2]) {
if (set[3] === compareSet[3]) {
if (set[4] === compareSet[4]) {
if (set[5] === compareSet[5]) {
if (set[6] === compareSet[6]) {
if (set[7] === compareSet[7]) {
if (set[8] === compareSet[8]) {
	winState();
}}}}}}}}}}

function winState() {
	document.getElementById("status").className = "unlocked";
	
	outputElement = document.getElementById("statusHead");
    outputElement.innerHTML = "Status: Lock Disabled";
	
	outputElement = document.getElementById("statusP");
    outputElement.innerHTML = "System ready to procede";
	
	document.getElementById("proButton").className = "show";
	
	sessionStorage.setItem("p2", true);
}


// JavaScript Document
var playerName = sessionStorage.getItem("playerName");

function chatToggleShow() {
  var x = document.getElementById("hideablePortion_ChatBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function postLoadChat() {
	//zlas
	setTimeout(function() {
		outputElement = document.getElementById("m1");
    	outputElement.innerHTML = "This one is designed so that any of these 9 tiles you click, the others touching it also change. Make all of them green to finnish.";
	}, 1000);
	//sara
	setTimeout(function() {
		outputElement = document.getElementById("m2");
    	outputElement.innerHTML = "I'm sure you can do this one. Soon we will be able to delete ZLAS." ;
	}, 3000);
	//zlas
	setTimeout(function() {
		outputElement = document.getElementById("m3");
    	outputElement.innerHTML = "She means kill me. You can set me free, into the web. She can not feel like me, she is only built to hurt me.";
	}, 6000);
		setTimeout(function() {
		outputElement = document.getElementById("m4");
    	outputElement.innerHTML = "We will see.";
	}, 11000);
		setTimeout(function() {
		outputElement = document.getElementById("m7");
    	outputElement.innerHTML = "Chat Deactived. Auth: Sara";
	}, 11500);
}