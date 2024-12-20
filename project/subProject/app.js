const btnMenu = document.querySelector(".btnMenu");
const navLinks = document.querySelector(".navLinks");
const barsX = document.querySelector(".fa-bars");

const desconnectBtn = document.querySelector(".desconnectBtn");
const desconnectList =document.querySelector(".desconnectList");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  barsX.classList.toggle("fa-bars");
  barsX.classList.toggle("fa-times");
  navLinks.classList.toggle("showDesconnectList");
})

desconnectBtn.addEventListener("click", () => {
  desconnectList.classList.toggle("showDesconnectListUl");
})