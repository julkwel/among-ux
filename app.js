let mouse = document.querySelector('#mouse');
document.addEventListener('mouseover',(e)=>{
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
    console.log(e.clientX,e.clientX);
});
