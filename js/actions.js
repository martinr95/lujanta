const hamburger = document.querySelector(".hamburger");
const ulNav = document.querySelector(".ul-nav");
const wrapperMain = document.querySelector(".wrapper-main")
const sliderNav = document.querySelector(".slider-nav")




hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ulNav.classList.toggle("active");
});


