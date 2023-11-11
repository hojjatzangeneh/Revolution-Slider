const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

prev.addEventListener("click", () => {
  prevSlide();
});
next.addEventListener("click", () => {
  nextSlide();
});
function prevSlide() {
  console.log(index);
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}
function nextSlide() {
  console.log(index);

  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}
function changeSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
  // adding code to show active dot in the indicators
  let indicators = document.querySelectorAll(".indicatorContainer > div");
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  indicators[index].classList.add("active");
  resetAutoplay();
}
// crating dot indicators by using Javascript start

const indicatorContainer = document.querySelector(".indicatorContainer");
function buildIndicators() {
  for (let i = 0; i < slides.length; i++) {
    let element = document.createElement("div");
    element.dataset.i = i + 1;
    element.setAttribute("onclick", "gotoSlide(this)");
    // making first dot as active by default
    if (i == 0) element.classList.add("active");
    indicatorContainer.appendChild(element);
  }
}
buildIndicators();

// crating dot indicators by using Javascript end

//creating gotoSlide Function
function gotoSlide(element) {
  let k = element.dataset.i;
  index = k - 1;
  changeSlide();
}
// slide autoplay functionality
let timer = setInterval(nextSlide, 4000);
// 1000 = 1 second so 4000 = 4 seconds

function resetAutoplay() {
  clearInterval(timer); // stop the timer
  timer = setInterval(nextSlide, 4000); // again start the timer
}
