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

document.addEventListener("DOMContentLoaded", function(){
	// Handler when the DOM is fully loaded
	var message = document.getElementById("firstMsg");
	if (message) {
		message.classList.add("animated bounceIn");
	} 
  });