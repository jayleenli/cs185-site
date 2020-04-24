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

