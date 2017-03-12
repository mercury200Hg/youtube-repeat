console.log("Enters replay.js");
var vid = document.getElementsByClassName("video-stream html5-main-video")[0];

//console.log(vid);

vid.onended = function() {
	chrome.storage.sync.get("repeat_y",function (items) {
		if(items.repeat_y==true) {
			replay();
		}
	});
};


function replay() {
	var button = document.getElementsByClassName("ytp-play-button ytp-button")[0];
	if(button.getAttribute("title")=="Replay") {
		button.click();
	}
}