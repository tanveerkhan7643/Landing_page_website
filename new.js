// // MOBILE MENU
// const menuBtn = document.getElementById("menuBtn");
// const closeBtn = document.getElementById("closeBtn");
// const mobileMenu = document.getElementById("mobileMenu");

// menuBtn.addEventListener("click", () => {
//   mobileMenu.classList.remove("hidden");
//   mobileMenu.classList.add("flex");
// });

// closeBtn.addEventListener("click", () => {
//   mobileMenu.classList.add("hidden");
//   mobileMenu.classList.remove("flex");
// });

// // IMAGE SLIDER
// const slider = document.getElementById("slider");
// const container = document.getElementById("sliderContainer");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// let index = 0;
// const totalSlides = slider.children.length;

// function updateSlide() {
//   const width = container.clientWidth;
//   slider.style.transform = `translateX(-${index * width}px)`;
// }

// nextBtn.addEventListener("click", () => {
//   index = (index + 1) % totalSlides;
//   updateSlide();
// });

// prevBtn.addEventListener("click", () => {
//   index = (index - 1 + totalSlides) % totalSlides;
//   updateSlide();
// });

// window.addEventListener("resize", updateSlide);

