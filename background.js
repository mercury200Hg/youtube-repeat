chrome.extension.onMessage.addListener(function(request,sender) {
	if(request.ready==true && sender.tab.url.indexOf('youtube.com/') != -1){
		chrome.pageAction.show(sender.tab.id);

	}
});

chrome.webNavigation.onCompleted.addListener(function(tab){
    
		chrome.storage.sync.get("repeat_y",function (items) {
			if(!chrome.runtime.error) {
				chrome.tabs.executeScript(tab.id,{file:"replay.js"});
			}else {
				chrome.tabs.executeScript(tab.id,{code:"console.log('Error in replay');"});
			}
		});    
});
