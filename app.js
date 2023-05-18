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