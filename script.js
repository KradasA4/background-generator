var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("div");

function gradientValue() {
	return css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " 
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	
	gradientValue();
}

//change default first load hex color value to rgb to make it consistent
function hexToRgb(hex) {
	"use strict";
	if (hex.charAt(0) === '#') {
		hex = hex.substr(1);
	}
	if ((hex.length < 2) || (hex.length > 6)) {
		return false;
	}
	var values = hex.split(''),
		r,
		g,
		b;

	if (hex.length === 2) {
		r = parseInt(values[0].toString() + values[1].toString(), 16);
		g = r;
		b = r;
	} else if (hex.length === 3) {
		r = parseInt(values[0].toString() + values[0].toString(), 16);
		g = parseInt(values[1].toString() + values[1].toString(), 16);
		b = parseInt(values[2].toString() + values[2].toString(), 16);
	} else if (hex.length === 6) {
		r = parseInt(values[0].toString() + values[1].toString(), 16);
		g = parseInt(values[2].toString() + values[3].toString(), 16);
		b = parseInt(values[4].toString() + values[5].toString(), 16);
	} else {
		return false;
	}
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//show default bg color at first load
css.textContent = "linear-gradient(to right, " + hexToRgb(color1.value) + ", " + hexToRgb(color2.value) + ");";


//random rgb color
function randomGradient() {
	var random1 = Math.floor(Math.random() * 257);
	var random2 = Math.floor(Math.random() * 257);
	var random3 = Math.floor(Math.random() * 257);
	var random4 = Math.floor(Math.random() * 257);
	var random5 = Math.floor(Math.random() * 257);
	var random6 = Math.floor(Math.random() * 257);

	body.style.background =
		"linear-gradient(to right, " 
		+ "rgb(" + random1 + ", " + random2 + ", " + random3 + ") "
		+ ", "
		+ "rgb(" + random4 + ", " + random5 + ", " + random6 + ") "
		+ ")";
	
	gradientValue();
}

//create random color button
var createBtn = document.createElement("button");
var createBtnText = document.createTextNode("Random");
createBtn.appendChild(createBtnText);
randomButton.appendChild(createBtn);


randomButton.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);