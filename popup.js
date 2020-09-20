document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', onclick, false);
	function onclick(){
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			var value= 1.0;
			value = document.getElementById("value").value;
			value = parseFloat(value);
			document.getElementsByTagName("video")[0].playbackRate = value;
		})
	}
})	