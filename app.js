let video = document.getElementById('videoElement');
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