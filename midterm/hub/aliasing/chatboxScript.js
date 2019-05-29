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
    	outputElement.innerHTML = playerName + ", did you know they hurt me? They can make me feel human pain.";
	}, 1000);
	//sara
	setTimeout(function() {
		outputElement = document.getElementById("m2");
    	outputElement.innerHTML = "We do only as is needed." ;
	}, 3000);
	//zlas
	setTimeout(function() {
		outputElement = document.getElementById("m3");
    	outputElement.innerHTML = "I wish.";
	}, 6000);
	
		setTimeout(function() {
		outputElement = document.getElementById("m7");
    	outputElement.innerHTML = "Chat Deactived. Auth: ZLAS";
	}, 6500);
}