const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

openModal.addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

closeModal.addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});
