

const header = document.querySelector("header");

const scrollUp = document.querySelector("#scroll-up");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navList.classList.toggle('active');
};
//hover function over logo- changes from black to pink on hover.. not functioning 
function hover(pageLogo) {
    element.setAttribute('src', '/assets/images/New Project.svg');
  }
  function unhover(pageLogo) {
    element.setAttribute('src', '/assets/images/alogo-2.svg');
  }


//swiper testimonial 
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  
});

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navList.classList.remove('active');
};

const sr = ScrollReveal ({
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


sr.reveal('.home-text',{delay:300, origin:'left'})
sr.reveal('.home-img',{delay:300, origin:'right'})

sr.reveal('.additional,.about,.portfolio,.skills,.contacts',{delay:200, origin:'bottom'})
