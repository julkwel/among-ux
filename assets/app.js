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

let isMovingLeft = true;
const informationWidth = informationDiv.offsetWidth;
const buttonWidth = switchBtn.offsetWidth;

switchBtn.addEventListener('mouseover', () => {
  switchBtn.style.transition = 'left 0.5s, right 0.5s';

  if (isMovingLeft) {
    switchBtn.style.left = 'auto';
    switchBtn.style.right = `${informationWidth - buttonWidth}px`;
    isMovingLeft = false;
  } else {
    switchBtn.style.left = `${informationWidth - buttonWidth}px`;
    switchBtn.style.right = 'auto';
    isMovingLeft = true;
  }
});

switchBtn.addEventListener('click', () => {
  window.location.href = 'https://github.com/julkwel/among-ux';
});

// Fetch the contributors data from the GitHub API
fetch('https://api.github.com/repos/julkwel/among-ux/contributors')
    .then(response => response.json())
    .then(data => {
        // Select the list element
        const contributorsList = document.getElementById('contributors-list');

        // Loop through the contributor data and create list items
        data.forEach(contributor => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${contributor.avatar_url}" alt="${contributor.login}" width="50">
                <a href="${contributor.html_url}" target="_blank">${contributor.login}</a>
            `;
            contributorsList.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));

// Display input range values
window.onload = function() {
  var qtyInput = document.getElementById("qty");
  var addToCartButton = document.querySelector(".add-to-cart");

  qtyInput.addEventListener("input", function() {
      var value = qtyInput.value;
      document.getElementById("valueDisplay").textContent = value;
      var price = value * 1.2;
      addToCartButton.textContent = "Buy $" + price.toFixed(2);
  });

  // Firework effect
  var container = document.getElementById("fireworks-container");

  function createFirework() {
      var firework = document.createElement("div");
      firework.classList.add("firework");

      var randomX = Math.random() * (window.innerWidth - 20) + 10;
      var randomY = Math.random() * (window.innerHeight - 20) + 10;

      firework.style.left = randomX + "px";
      firework.style.top = randomY + "px";

      container.appendChild(firework);

      setTimeout(function() {
          container.removeChild(firework);
      }, 1000);
  }

  function startFireworks() {
      setInterval(createFirework, 500);
  }

  startFireworks();
};