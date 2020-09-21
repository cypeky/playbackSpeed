document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener("click", onclick,false);
	function onclick(){
		var s_value = document.getElementById("speed").value;
		chrome.tabs.query({active:true, currentWindow:true},function(tabs){
			chrome.tabs.sendMessage(tabs[0].id,s_value);
		});
	}
}, false)