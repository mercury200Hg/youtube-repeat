// Initially
var current = document.getElementsByClassName("ytp-time-current")[0].innerHTML;
var total = document.getElementsByClassName("ytp-time-duration")[0].innerHTML;
while(timeToSec(current) < timeToSec(total)) {
	//Do nothing but wait and update current
	current = document.getElementsByClassName("ytp-time-current")[0].innerHTML;
}
console.log(current);
if(timeToSec(current) == timeToSe(total)) {
	// Click replay.
	console.log("replay");
	replay();
}

function replay() {
	var button = document.getElementsByClassName("ytp-play-button ytp-button")[0];
		if(button.getAttribute("title")=="Replay") {
			button.click();
		}
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


function timeToSec(time) {
	var minute = parseInt(time.split(":")[0]);
	var seconds = parseInt(time.split(":")[1]);
	return (minute*60)+seconds;
}
