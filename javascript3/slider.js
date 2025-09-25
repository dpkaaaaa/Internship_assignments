const slides = document.querySelectorAll(".slides img"); 
const slidesContainer = document.querySelector(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
let autoSlideInterval;
let startX = 0;
let isDragging = false;

// Update slide position 
function showSlide(i) {
  const sliderWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${i * sliderWidth}px)`;
  index = i;
}

// Next slide
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}
// previous slide
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

// Button listeners
nextBtn.addEventListener("click", () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });
prevBtn.addEventListener("click", () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });

// Drag function 
const slider = document.querySelector(".slider");

slider.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
  stopAutoSlide();
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const currentX = e.clientX;
  
});

document.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.clientX;
  const diff = startX - endX;

  if (diff > 50) nextSlide();       // dragged left
  else if (diff < -50) prevSlide(); // dragged right

  startAutoSlide();
});

// Initially shows first slide
showSlide(index);
startAutoSlide();
