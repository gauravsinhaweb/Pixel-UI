const sbBaseline = document.querySelector(".sb-baseline");
const sbLeading = document.querySelector(".sb-leading");
const sbStacked = document.querySelector(".sb-stacked");
const snackbarBtn = document.querySelector(".snackbar_btn");

snackbarBtn.addEventListener("click", (e) => {
  let selectedClass = e.target.innerHTML;

  if (selectedClass === "baseline") {
    sbBaseline.style.display = "flex";

    setTimeout(() => {
      sbBaseline.style.display = "none";
    }, 5000);
  } else if (selectedClass === "leading") {
    sbLeading.style.display = "flex";
    setTimeout(() => {
      sbLeading.style.display = "none";
    }, 5000);
  } else if (selectedClass === "stacked") {
    sbStacked.style.display = "flex";
    setTimeout(() => {
      sbStacked.style.display = "none";
    }, 5000);
  }
});
const crossBaseline = document.querySelector(".cross_baseline");
const crossLeading = document.querySelector(".cross_leading");
const crossStacked = document.querySelector(".cross_stacked");

crossBaseline.addEventListener("click", () => {
  sbBaseline.style.display = "none";
});

crossLeading.addEventListener("click", () => {
  sbLeading.style.display = "none";
});

crossStacked.addEventListener("click", () => {
  sbStacked.style.display = "none";
});
