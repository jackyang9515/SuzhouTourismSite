const carouselSlide = document.querySelector('.carousel_slide');
const carouselImg = document.querySelectorAll('.slide_img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
console.log(prevBtn);
console.log(nextBtn);


//Counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//Button Listeners
nextBtn.addEventListener('click', () => {
	if (counter >= carouselImg.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease";
	counter++;
	console.log(counter);
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease";
	counter--;
	console.log(counter);
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend', () => {
	if (carouselImg[counter].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImg.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImg[counter].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImg.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
})