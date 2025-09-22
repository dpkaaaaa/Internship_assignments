const slides = document.querySelectorAll(".slides img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
let autoSlideInterval;
let startX = 0;
let isDragging = false;

// Show slide
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// Next/Prev slide
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 2000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Buttons
nextBtn.addEventListener("click", () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });
prevBtn.addEventListener("click", () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });


const slider = document.querySelector(".slider");

slider.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
  stopAutoSlide();
});

document.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.clientX;
  const diff = startX - endX;

  if (diff > 50) nextSlide();       // drag left 
  else if (diff < -50) prevSlide(); // drag right

  startAutoSlide();
});

// initially shows first slide
showSlide(index);
startAutoSlide();
