console.log("Enters replay.js");
var vid = document.querySelector(".video-stream.html5-main-video");

if (vid) {
	console.log("Video element found");

	// Function to toggle loop
	function toggleLoop() {
		const contextMenuEvent = new MouseEvent('contextmenu', {
			bubbles: true,
			cancelable: true,
			view: window
		});

		vid.dispatchEvent(contextMenuEvent);

		setTimeout(() => {
			const loopMenuItem = Array.from(document.querySelectorAll('.ytp-menuitem'))
				.find(item => item.textContent.includes('Loop'));

			if (loopMenuItem) {
				console.log("Toggling loop option");
				loopMenuItem.click();
			} else {
				console.error("Loop option not found");
			}
		}, 500); // Increased delay to ensure the context menu is fully rendered
	}

	// Check if loop is already enabled
	chrome.storage.local.get(`loop_${tabId}`, (result) => {
		if (!result[`loop_${tabId}`]) {
			toggleLoop();
			chrome.storage.local.set({ [`loop_${tabId}`]: true });
		}
	});

	vid.onended = function() {
		console.log("Video ended");
		chrome.storage.local.get(`repeat_${tabId}`, function(items) {
			console.log("Storage items:", items);
			if (items[`repeat_${tabId}`]) {
				console.log("Repeating video");
				vid.play();
			}
		});
	};
} else {
	console.error("Video element not found");
}
