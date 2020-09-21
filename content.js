chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
	alert("ok?");
	document.getElementsByTagName("video")[0].playbackRate = speed;
});