const mapa = document.querySelector(".container-map");
const imagenMapa = document.querySelector(".container-map img");

let isDragging = false;
let startPositionX, startPositionY;

imagenMapa.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPositionX = e.clientX - mapa.scrollLeft;
  startPositionY = e.clientY - mapa.scrollTop;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const offsetX = e.clientX - startPositionX;
    const offsetY = e.clientY - startPositionY;
    mapa.scrollLeft = mapa.scrollLeft - offsetX;
    mapa.scrollTop = mapa.scrollTop - offsetY;
  }
});