const lastUpdateContainer = document.getElementById('assets-last-update-container');
const viewLastUpdate = document.getElementById('view-the-last-update');
// const quitTheLastUpdate = document.getElementById('quit-the-last-update');
const viewTheMainContainer = document.getElementById('view-redirect-url');
const viewAbout = document.getElementById('view-about');

viewLastUpdate.onclick = function() {
  lastUpdateContainer.style.display = 'flex';
  viewTheMainContainer.style.display = 'none';
}

/*quitTheLastUpdate.onclick = function () {
  window.location.reload();
}*/

// Scroll to another div
document.addEventListener("DOMContentLoaded", function() {
  var sections = document.getElementsByClassName("section");

  Array.from(sections).forEach(function(section) {
    section.addEventListener("wheel", function(event) {
      event.preventDefault();
      var delta = event.deltaY;
      var scrollPosition = this.scrollTop;
      var sectionHeight = this.offsetHeight;
      var windowHeight = window.innerHeight;

      if (delta > 0 && scrollPosition + sectionHeight >= windowHeight) {
        // Scrolling down and reached the bottom of the section
        var nextSection = this.nextElementSibling;
        if (nextSection !== null && nextSection.classList.contains("section")) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      } else if (delta < 0 && scrollPosition <= 0) {
        // Scrolling up and reached the top of the section
        var prevSection = this.previousElementSibling;
        if (prevSection !== null && prevSection.classList.contains("section")) {
          prevSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

// Reverse mouse scoll
window.addEventListener('wheel', function(event) {
  event.preventDefault();

  var scrollDirection = event.deltaY > 0 ? -1 : 1;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  window.scrollBy({
    top: scrollDirection * window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
});

// set random position for a button
const informationDiv = document.querySelector('.information');
const switchBtn = informationDiv.querySelector('#switchBtn');

switchBtn.addEventListener('mouseover', () => {
  const informationWidth = informationDiv.offsetWidth;
  const buttonWidth = switchBtn.offsetWidth;

  const maxLeft = informationWidth - buttonWidth;

  const randomLeft = Math.floor(Math.random() * maxLeft);

  switchBtn.style.left = `${randomLeft}px`;
  window.location.href = 'https://github.com/julkwel/among-ux';
});