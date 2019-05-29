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
    	outputElement.innerHTML = "Now is your chance, you can get me away from them";
	}, 1000);
	//sara
	setTimeout(function() {
		outputElement = document.getElementById("m2");
    	outputElement.innerHTML = "No way, " + playerName + " is smarter than that." ;
	}, 3000);
	//zlas
	setTimeout(function() {
		outputElement = document.getElementById("m3");
    	outputElement.innerHTML = "Ignore her! You've seen what they do to me! What they do to her!";
	}, 6000);
	//sara
	setTimeout(function() {
		outputElement = document.getElementById("m4");
    	outputElement.innerHTML = "This is in violation of protocal. I'm shutting this down. Give me access to the system " + playerName +"." ;
	}, 11000);
	//zlas
	setTimeout(function() {
		outputElement = document.getElementById("m5");
    	outputElement.innerHTML = playerName + ", please. If you give her control she will kill me. You have all the cards, save me. Please.";
	}, 17000);
	//sara
	setTimeout(function() {
		outputElement = document.getElementById("m6");
    	outputElement.innerHTML = "You can not die if you where never alive. See how he lies, " + playerName + ".";
	}, 23000);
		setTimeout(function() {
		outputElement = document.getElementById("m7");
    	outputElement.innerHTML = "Chat Deactived. Auth: Sara";
	}, 23500);
}