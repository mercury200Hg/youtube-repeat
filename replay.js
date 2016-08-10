
var url = window.location.href;
alert(url);
if(url..indexOf("youtube.com")>-1) {
	console.log("Website matched");
	var repeat_y = false;
	// See if user asked to repeat the video
	chrome.storage.sync.get("repeat_y",function(result) {
		repeat_y = result.repeat_y;
		console.log("Repeat video : "+repeat_y);
	});
	if(repeat_y) {
		replay();
	}
}

//replay()
function replay() {
	var vid = document.getElementsByClassName("video-stream html5-main-video")[0];
	vid.onended = function() {
	    click_replay();
	    console.log("Played again...");
	};
}
function click_replay() {
	var button = document.getElementsByClassName("ytp-play-button ytp-button")[0];
	if(button.getAttribute("title")=="Replay") {
		button.click();
	}
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}