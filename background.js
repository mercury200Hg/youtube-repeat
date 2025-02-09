chrome.runtime.onMessage.addListener((request, sender) => {
	if (request.ready === true && sender.tab.url.includes('youtube.com/')) {
		console.log('Message received from content script');
		chrome.action.show(sender.tab.id);
	}
});

chrome.webNavigation.onCompleted.addListener((details) => {
	console.log('Navigation completed:', details);
	chrome.storage.local.get(`repeat_${details.tabId}`, (items) => {
		console.log('Storage items:', items);
		if (!chrome.runtime.lastError && items[`repeat_${details.tabId}`]) {
			chrome.scripting.executeScript({
				target: { tabId: details.tabId },
				files: ["replay.js"]
			}, (results) => {
				if (chrome.runtime.lastError) {
					console.error('Error executing script:', chrome.runtime.lastError.message);
				} else {
					console.log('Script executed successfully');
				}
			});
		} else {
			console.error('Error in replay:', chrome.runtime.lastError);
		}
	});
}, { url: [{ hostContains: 'youtube.com' }] });

chrome.runtime.onInstalled.addListener(() => {
	console.log("YouTube Repeat extension installed.");
});

chrome.tabs.onRemoved.addListener((tabId) => {
	chrome.storage.local.remove(`repeat_${tabId}`, () => {
		console.log(`Cleared repeat setting for tab ${tabId}`);
	});

	chrome.storage.local.remove(`loop_${tabId}`, () => {
		console.log(`Cleared loop setting for tab ${tabId}`);
	});
});
