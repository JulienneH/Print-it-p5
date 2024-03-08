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
//select the first slide
let slideIndex = 0;

const bannerText = banner.querySelector("p");

// function to display the slide
function showSlide(index) {
	const slide = slides[index];
	const imageElement = document.querySelector(".banner-img");

	imageElement.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;
}

//Show first slide on page load
showSlide(slideIndex);




//event handler for arrows
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function previous() {
	slideIndex--;
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}
	showSlide(slideIndex);
	selectedDot();
});

var arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function next() {
	slideIndex++;
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	showSlide(slideIndex);
	selectedDot();
});

const dotsContainer = document.querySelector(".dots");

for (let indice = 0; indice < slides.length; indice++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);

};

// Calling the SelectedDot function after creating the bullet points
selectedDot();

//update the dot_selected class according to the index of the current slide

function selectedDot() {
	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach(function (dot, index) {
		if (index === slideIndex) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
	})
}
