// arrow scroll up functionality 
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//swiper testimonial 
const swiper = new Swiper(".mySwiper", {
  pagination: {
  el: ".swiper-pagination",
  },
});

addEventListener('scroll', e => {
  const scrollTop = doc.scrollTop;
  if(scrollTop > start && scrollTop < stop){
    const d =scrollTop - start;
    const scale = Math.max(2,2 - (d) / 500, 1);
    aboutmeimg.style.transform= `scale(${scale})`
  }
})