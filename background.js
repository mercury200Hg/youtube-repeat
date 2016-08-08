chrome.extension.onMessage.addListener(function(request,sender) {
	if(request.ready==true && sender.tab.url.indexOf('youtube.com/') != -1){
		chrome.pageAction.show(sender.tab.id);
	}
});
chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id,{file:'replay.js'});
});
