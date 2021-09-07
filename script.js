const HamburgerBtn = document.getElementById("HamburgerBtn");
const nav = document.getElementById("nav");

HamburgerBtn.addEventListener("click", () => {
	nav.style.display =
		window.getComputedStyle(nav).display === "none" ? "flex" : "none";
});

window.addEventListener(
	"resize",
	() => {
		nav.style.display = window.innerWidth > 800 ? "block" : "none";
	},
	500
);

window.addEventListener(
	"click",
	function (e) {
		if (
			nav.contains(e.target) == false &&
			window.getComputedStyle(nav).display === "flex"
		) {
			nav.style.display = "none";
		}
	},
	100
);

window.addEventListener("scroll", () => {
	if (window.getComputedStyle(nav).display === "flex") window.scrollTo(0, 0);
});
