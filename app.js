let mouse = document.querySelector('#mouse');
document.addEventListener('mouseover',(e)=>{
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
    console.log(e.clientX,e.clientX);
});

const board = document.getElementById("board");

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

