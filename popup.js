document.body.onload = function() {
	chrome.storage.sync.get("repeat_y",function (items) {
		if(!chrome.runtime.error) {
			console.log(items);
			document.getElementById("repeat_y").checked = items.repeat_y;
		}
	});
}

document.getElementById("repeat_y").onchange = function() {
	var value = document.getElementById("repeat_y").checked;
	console.log(value);
	chrome.storage.sync.set({"repeat_y":value},function(){
		if(chrome.runtime.error) {
			console.log("runtime error");
		}
	});
}