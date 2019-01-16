var navbar = document.getElementById("navbar");
var mainsite = document.querySelector("main");

document.addEventListener("scroll", function() {
	if (mainsite.offsetTop - document.documentElement.scrollTop < 140) {
		navbar.classList.add("show");
	} else {
		navbar.classList.remove("show");
	}
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function () {
        smoothScroll.scrollTo(this.getAttribute('href'), 500);
    });
});

// NavbarToggle
document.getElementById("toggleBtn").addEventListener("click", function() {
  navbar.classList.toggle("responsive");
});