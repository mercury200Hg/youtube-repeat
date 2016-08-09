var vid = document.getElementsByClassName("video-stream html5-main-video")[0];
console.log(vid);

vid.onended = function() {
    replay();
};


function replay() {
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