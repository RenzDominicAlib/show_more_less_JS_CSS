function setUpevent(){

	var content = document.getElementById("content");
	var button = document.getElementById("show_more");

	button.onclick = function(){

		if (content.className == "open") {
			//from expand to shrink
			content.className = "";
			button.innerHTML = "SHOW MORE";
		}

		else{
			// from shrink to expand
			content.className = "open";
			button.innerHTML = "SHOW LESS";
		}

	};
};

window.onload = function(){
	setUpevent();
};