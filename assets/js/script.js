const header = document.querySelector("header");
const scrollUp = document.querySelector("#scroll-up");
window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');
menu.onclick = () => {
	menu.classList.toggle('box-menu');
	navList.classList.toggle('active');
};
//swiper testimonial 
var swiper = new Swiper(".mySwiper", {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navList.classList.remove('active');
};
const sr = ScrollReveal({
	distance: '45px',
	duration: 2700,
	reset: true
})
scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
sr.reveal('.home-text', {
	delay: 300,
	origin: 'left'
})
sr.reveal('.home-img', {
	delay: 300,
	origin: 'right'
})
sr.reveal('.additional,.about,.portfolio,.skills,.contacts', {
	delay: 200,
	origin: 'bottom'
})