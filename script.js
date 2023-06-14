const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  console.log("Modal is open now");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

const closeModal = function () {
  console.log("Modal is close now");
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
