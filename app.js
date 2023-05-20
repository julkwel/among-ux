
let videoBack = document.getElementById('bodyBack');
const setUpCamera = () => {
    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function(stream) {
                videoBack.srcObject = stream;
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}
setUpCamera();

let translats = [40, -40];
let inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('mouseover', function (e) {
        console.log(e.target);
      let translat1 = Math.floor(Math.random()*10)%2==0?translats[0]:translats[1];
      let translat2 = Math.floor(Math.random()*10)%2==0?translats[0]:translats[1];
      e.target.style.transform = `translateX(${translat1}px) translateY(${translat2}px)`;
    });
    inputs[i].addEventListener('mouseout', function (e) {
        e.target.style.transform = `none`;
    });
  }

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

/*const emailField = document.querySelector('#email');
const subjectlField = document.querySelector('#subject');
const btnSubmitContact = document.querySelector('#submitContact');
btnSubmitContact.addEventListener('click',(e) => {
  e.preventDefault();
  const email = emailField.value;
  const subject = subjectlField.value;
  if(!email || !subject) alert('champs obligatoire!! :-(');
  else alert('envoyé');
})
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

*/
window.addEventListener("scroll", function() {
  var scrollToBottomBtn = document.getElementById("scrollToBottomBtn");
  var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  var windowHeight = window.innerHeight;
  if (scrollHeight - windowHeight - (document.documentElement.scrollTop || document.body.scrollTop) > 100) {
    scrollToBottomBtn.style.display = "block";
  } else {
    scrollToBottomBtn.style.display = "none";
  }
});

document.getElementById("scrollToBottomBtn").addEventListener("click", function() {
  var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  window.scrollTo({
    top: scrollHeight,
    behavior: "smooth"
  });
});


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

function autoPlay() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(autoPlay, 1000);

/* MODAL */
var signinModalBtn = document.getElementById("btn-signin");
var signinModal = document.getElementById("signinModal");
var signinCloseBtn = document.getElementsByClassName("close")[0];

signinModalBtn.addEventListener("click", function() {
  signinModal.style.display = "block";
});

signinCloseBtn.addEventListener("click", function() {
  signinModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == signinModal) {
    signinModal.style.display = "none";
  }
});

var signupModalBtn = document.getElementById("btn-signup");
var signupModal = document.getElementById("signupModal");
var signupCloseBtn = document.getElementsByClassName("close")[1];

signupModalBtn.addEventListener("click", function() {
  signupModal.style.display = "block";
});

signupCloseBtn.addEventListener("click", function() {
  signupModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
});

