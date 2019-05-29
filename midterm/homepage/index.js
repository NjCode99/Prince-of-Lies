// JavaScript Document for homepage

//show and hide the login.
function loginToggle() {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
setInterval(function(){
	var x = document.getElementById("username").value;
	sessionStorage.setItem("playername", x);
}, 50)
