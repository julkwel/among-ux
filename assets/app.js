const lastUpdateContainer = document.getElementById('assets-last-update-container');
const viewLastUpdate = document.getElementById('view-the-last-update');
// const quitTheLastUpdate = document.getElementById('quit-the-last-update');
const viewTheMainContainer = document.getElementById('view-redirect-url');
const video = document.getElementById('video');
const memeG = document.getElementById('memesg');
const inputH = document.getElementById('inputH');
const textG = document.getElementById('textg');
const imageG = document.getElementById('imageg');
const dialog = document.getElementById('demo-dialog');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const containerG = document.getElementById('memesg');

const pLink = document.querySelectorAll('.link p');
const textIn = ['Update','About','Home'];
const textOut = ['Home','Update','About'];

const viewAbout = document.getElementById('view-about');


viewLastUpdate.onclick = function() {
  lastUpdateContainer.style.display = 'flex';
  viewTheMainContainer.style.display = 'none';
  memeG.style.display = 'flex';
}

/*quitTheLastUpdate.onclick = function () {
  window.location.reload();

}*/

for (let i = 0; i < pLink.length; i++) {
  pLink[i].onmouseenter = function (e) {
    e.target.innerText = textIn[i];
    e.target.setAttribute('title',`Oh sorry, this is the ${textIn[i]}`);
  };
  pLink[i].onmouseout = function (e) {
    e.target.innerHTML = textOut[i];
  };
}

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

    const setUpCamera = () => {
      if(navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({video: true})
              .then(function(stream) {
                  video.srcObject = stream;
              })
              .catch(function(err) {
                  console.log(err);
              });
      }
  }
  setUpCamera();

  inputH.onclick = () => {
    dialog.showModal();
  }

  btnYes.onclick = () => {
    dialog.close();
  }

  btnNo.onclick = () => {
    dialog.close();
  }

  imageG.onchange = (e)=>{
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
      let image = new Image();
      image.src = event.target.result;
      image.style.width = "300px";
      image.style.margin = "10px auto";
      image.style.borderRadius = "10px";
      containerG.appendChild(image);
    };
    reader.readAsDataURL(file);
  }