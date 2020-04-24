function externalmain () {
	//determine active page
	determineActivePage();
}    

function determineActivePage() {
	page = document.location.href.match(/[^\/]+$/)[0];
	console.log(page);

	if (page == "index.html") {
		$("#nav-bar-list li:eq(0)").addClass("active");
	}
	else if (page == "photos.html") {
		$("#nav-bar-list li:eq(1)").addClass("active");
	}
	else if (page == "animations.html") {
		$("#nav-bar-list li:eq(2)").addClass("active");
	}
	else {
		$("#nav-bar-list li:eq(3)").addClass("active");
	}
}

function toTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", function(){
	scrollBtn = document.getElementById("scroll-to-top");
	scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollPosition > 500) {
		scrollBtn.style.display = "block";
	}
	else {
		scrollBtn.style.display = "none";
	}
});

