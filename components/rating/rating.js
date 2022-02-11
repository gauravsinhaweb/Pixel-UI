let ratingStar1 = document.getElementById("rating-star-1");
let ratingStar2 = document.getElementById("rating-star-2");
let ratingStar3 = document.getElementById("rating-star-3");
let ratingStar4 = document.getElementById("rating-star-4");
let ratingStar5 = document.getElementById("rating-star-5");
let ratingStarInfo = document.getElementById("rating-star-info");
let resetRatingButton = document.getElementById("reset-rating-button");
let starArray = [
  ratingStar1,
  ratingStar2,
  ratingStar3,
  ratingStar4,
  ratingStar5,
];

// 1 Star Rating
ratingStar1.addEventListener("click", () => {
  colorStars(1);
});

// 2 Star Rating
ratingStar2.addEventListener("click", () => {
  colorStars(2);
});

// 3 Star Rating
ratingStar3.addEventListener("click", () => {
  colorStars(3);
});

// 4 Star Rating
ratingStar4.addEventListener("click", () => {
  colorStars(4);
});

// 5 Star Rating
ratingStar5.addEventListener("click", () => {
  colorStars(5);
});

// Here we are resetting the rating bar
resetRatingButton.addEventListener("click", () => {
  colorStars(0);
});

function colorStars(index) {
  let iterator = 0;

  // This would color the stars
  for (iterator = 0; iterator < index; iterator++) {
    starArray[iterator].setAttribute("style", "color: var(--star)");
  }

  // This would remove the color from stars
  while (iterator != 5) {
    starArray[iterator].setAttribute("style", "color: var(--secondary)");
    iterator++;
  }

  // To display how many stars user has selceted
  ratingStarInfo.innerHTML = `${index} Stars`;
}
