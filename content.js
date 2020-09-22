chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
	document.getElementsByTagName("video")[0].playbackRate = message;
});