console.log("Content script loaded");

function checkRepeat(tabId) {
  const video = document.querySelector(".video-stream.html5-main-video");
  if (video) {
    video.onended = () => {
      chrome.storage.local.get(`repeat_${tabId}`, (result) => {
        if (result[`repeat_${tabId}`]) {
          console.log("Repeating video");
          video.play();
        }
      });
    };
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkRepeat" && message.tabId) {
    checkRepeat(message.tabId);
  }
});