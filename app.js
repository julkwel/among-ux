/*let mouse = document.querySelector('#mouse');
document.addEventListener('mouseover',(e)=>{
    mouse.style.left = `${e.clientX+2}px`;
    mouse.style.top = `${e.clientY}px`;
    console.log(e.clientX,e.clientX);
});*/

/*const board = document.getElementById("board");

let isDrawing = false;

board.addEventListener("mousedown", () => {
  isDrawing = true;
});

board.addEventListener("mouseup", () => {
  isDrawing = false;
});

board.addEventListener("mousemove", event => {
  if (isDrawing) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    board.appendChild(circle);
  }
});

var audio = document.getElementById("audio");
audio.volume = 0.5;

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", function() {
	audio.play();
});*/

// Slide
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slider-controls button');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? 1 : 0;
  });

  buttons.forEach((button, i) => {
    button.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    showSlide(i);
  });
});
const emailField = document.querySelector('#email');
const subjectlField = document.querySelector('#subject');
const btnSubmitContact = document.querySelector('#submitContact');
btnSubmitContact.addEventListener('click',(e) => {
  e.preventDefault();
  const email = emailField.value;
  const subject = subjectlField.value;
  if(!email || !subject) alert('champs obligatoire!! :-(');
  else alert('envoyé');
})


function autoPlay() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(autoPlay, 3000);


const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
