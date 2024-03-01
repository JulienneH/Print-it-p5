const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
var arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
	alert("flèche gauche");
});

var arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	alert("flèche droite");
});

const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);

};

//sélectionne la première diapo
const SlideIndex = 0;

//mettre à jour la class dot_selected selon l'index de la diapo en cours

function SelectedDot() {
	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach(function (dot, index) {
		if (index === SlideIndex) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
	}
	)
}
SelectedDot();