document.getElementById("home").addEventListener("mouseover", function() {
	document.getElementById("sub-menu").classList.add("show");
});

document.getElementById("home").addEventListener("mouseout", function() {
	document.getElementById("sub-menu").classList.remove("show");
});