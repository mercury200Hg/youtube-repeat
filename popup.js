document.addEventListener('DOMContentLoaded', () => {
	const checkbox = document.getElementById('repeatCheckbox');
	const tooltip = document.createElement('div');
	tooltip.style.display = 'none';
	tooltip.style.backgroundColor = 'red';
	tooltip.style.color = 'white';
	tooltip.style.padding = '5px';
	tooltip.style.marginTop = '5px';
	tooltip.style.borderRadius = '3px';
	tooltip.textContent = "The tab URL doesn't match youtube.com";
	document.body.appendChild(tooltip);

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tabId = tabs[0].id;
		const tabUrl = tabs[0].url;

		checkbox.addEventListener('change', () => {
			if (!tabUrl.includes('youtube.com')) {
				tooltip.style.display = 'block';
				checkbox.checked = false; // Uncheck the box if not on YouTube
			} else {
				tooltip.style.display = 'none';
				if (checkbox.checked) {
					chrome.storage.local.set({ [`repeat_${tabId}`]: true }, () => {
						console.log(`Repeat set to true for tab ${tabId}`);
						chrome.tabs.sendMessage(tabId, { action: "checkRepeat", tabId: tabId });
					});
				} else {
					chrome.storage.local.remove(`repeat_${tabId}`, () => {
						console.log(`Repeat setting removed for tab ${tabId}`);
					});
				}
			}
		});

		chrome.storage.local.get(`repeat_${tabId}`, (result) => {
			checkbox.checked = result[`repeat_${tabId}`] || false;
		});
	});
});