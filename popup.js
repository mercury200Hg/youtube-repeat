var repeat_y = false;
chrome.storage.sync.get("repeat_y",function(result) {
	repeat_y = result.repeat_y;
});
console.log("Repeat video : "+repeat_y);
var check = document.getElementById("repeat_y");
check.onchange = update_repeat(check.checked);



function update_repeat(repeat_y) {
	console.log("Clicked");
	chrome.storage.sync.set({'repeat_y': repeat_y}, function() {
	  // Notify that we saved.
	  //alert("Settings saved");
	});
}