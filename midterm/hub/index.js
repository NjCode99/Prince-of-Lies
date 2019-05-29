	var p1 = sessionStorage.getItem("p1");
	var p2 = sessionStorage.getItem("p2");
	var p3 = sessionStorage.getItem("p3");
	var playerName = sessionStorage.getItem("playerName");

function postLoad() {
	if (p1 == null) {lockP1();} else {unlockP1()}
	if (p2 == null) {lockP2();} else {unlockP2()}
	if (p3 == null) {lockP3();} else {unlockP3()}
	postLoadChat();
	donecheck();
}

function lockP1() {
	outputElement = document.getElementById("p1State");
	outputElement.innerHTML = "Status: Locked";
	
	var ahref = document.getElementById("p1B");
	ahref.href = "../hub/aliasing";
	document.getElementById("p1B").className = "locked";
}
function unlockP1() {
	outputElement = document.getElementById("p1State");
	outputElement.innerHTML = "Status: Unlocked";
	
	document.getElementById("p1B").className = "nonAccess";
}
function lockP2() {
	outputElement = document.getElementById("p2State");
	outputElement.innerHTML = "Status: Locked";
	
	var ahref = document.getElementById("p2B");
	ahref.href = "../hub/sys-lock";
	document.getElementById("p2B").className = "locked";
}
function unlockP2() {
	outputElement = document.getElementById("p2State");
	outputElement.innerHTML = "Status: Unlocked";
	
	document.getElementById("p2B").className = "nonAccess";
}
function lockP3() {
	outputElement = document.getElementById("p3State");
	outputElement.innerHTML = "Status: Locked";
	
	var ahref = document.getElementById("p3B");
	ahref.href = "../hub/strategic";
	document.getElementById("p3B").className = "locked";
}
function unlockP3() {
	outputElement = document.getElementById("p3State");
	outputElement.innerHTML = "Status: Unlocked";
	
	document.getElementById("p3B").className = "nonAccess";
}


// JavaScript for chat
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
    	outputElement.innerHTML = playerName + ", these are three of the company's systems. I've altered them to contain turing tests. Special tests that only a human can solve.";
	}, 1000);
	//sara
	setTimeout(function() {
		outputElement = document.getElementById("m2");
    	outputElement.innerHTML = playerName + ", deactivate these and I will be able to stop him." ;
	}, 3000);
	//zlas
	setTimeout(function() {
		outputElement = document.getElementById("m3");
    	outputElement.innerHTML = "She can't solve them, and neither can I. Good luck, " + playerName;
	}, 6000);
	
		setTimeout(function() {
		outputElement = document.getElementById("m7");
    	outputElement.innerHTML = "Chat Deactived. Auth: ZLAS";
	}, 6500);
}