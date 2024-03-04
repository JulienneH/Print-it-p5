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
//sélectionne la première diapo
let SlideIndex = 0;

const bannerText = banner.querySelector("p");

// fonction pour afficher la diapo
function showSlide(index) {
	const slide = slides[index];
	const imageElement = document.querySelector(".banner-img");

	imageElement.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;
}

//Afficher la première diapo au chargement de la page
showSlide(SlideIndex);

//gestionnaire d'événements pour les flèches
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function previous() {
	SlideIndex--;
	if (SlideIndex < 0) {
		SlideIndex = slides.length - 1;
	}
	showSlide(SlideIndex);
	SelectedDot();
});

var arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function next() {
	SlideIndex++;
	if (SlideIndex >= slides.length) {
		SlideIndex = 0;
	}
	showSlide(SlideIndex);
	SelectedDot();
});

const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);

};



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
