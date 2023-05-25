const lastUpdateContainer = document.getElementById('assets-last-update-container');
const viewLastUpdate = document.getElementById('view-the-last-update');
const quitTheLastUpdate = document.getElementById('quit-the-last-update');
const viewTheMainContainer = document.getElementById('view-redirect-url');

viewLastUpdate.onclick = function() {
  lastUpdateContainer.style.display = 'flex';
  viewTheMainContainer.style.display = 'none';
}

quitTheLastUpdate.onclick = function () {
  window.location.reload();
}