window.addEventListener("load", onLoad, false);
//localStorage.removeItem("displayMode");
var styleName;

function getStyleName()
{
	getDisplayMode();
	return styleName;
}

function setStyleName(mode)
{
	styleName = mode == 0 ? "common_style.css" : "common_style_high_contrast.css";
}

function onLoad ()
{
	var colorBtn = document.getElementById("colorBtn");
	var blackBtn = document.getElementById("blackBtn");
	var commentBtn = document.getElementById("commentBtn");
	colorBtn.addEventListener("click", onColorClick, false);
	blackBtn.addEventListener("click", onBlackClick, false);
	commentBtn.addEventListener("click", onCommentPrompt, false);
	getDisplayMode();
}

function getDisplayMode()
{
	var displayMode =  localStorage["displayMode"];
	if (displayMode == undefined)
	{
		displayMode = localStorage["displayMode"] = 0; // default mode
	}
	setStyleName(displayMode);
}

function onColorClick ()
{
	localStorage["displayMode"] = 0;
	window.location.reload();
}

function onBlackClick ()
{
	localStorage["displayMode"] = 1;
	window.location.reload();
}


function calculatePrice() {
	alert("im ok");
}
