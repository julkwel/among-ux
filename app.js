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