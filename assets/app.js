const lastUpdateContainer = document.getElementById('assets-last-update-container');
const viewLastUpdate = document.getElementById('view-the-last-update');
const quitTheLastUpdate = document.getElementById('quit-the-last-update');
const viewTheMainContainer = document.getElementById('view-redirect-url');
const pLink = document.querySelectorAll('.link p');
const textIn = ['Update','About','Home'];
const textOut = ['Home','Update','About'];

viewLastUpdate.onclick = function() {
  lastUpdateContainer.style.display = 'flex';
  viewTheMainContainer.style.display = 'none';
}

quitTheLastUpdate.onclick = function () {
  window.location.reload();
}

for (let i = 0; i < pLink.length; i++) {
  pLink[i].onmouseenter = function (e) {
    e.target.innerText = textIn[i];
    e.target.setAttribute('title',`Oh sorry, this is the ${textIn[i]}`);
  };
  pLink[i].onmouseout = function (e) {
    e.target.innerHTML = textOut[i];
  };
}