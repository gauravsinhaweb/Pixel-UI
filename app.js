var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.transform = "translateY(0)";
    document.querySelector("aside").style.top = "10.7rem";
  } else {
    document.querySelector("nav").style.transform = "translateY(-100%)";
    document.querySelector("aside").style.top = "2rem";
  }

  prevScrollpos = currentScrollPos;
};
const hamburger = document.querySelector("#hamburger");
const aside = document.querySelector("#aside");

hamburger.addEventListener("click", function () {
  aside.style.transform = "translateX(0%)";
});

const themeBtn = document.querySelector("#theme");
let On = false;
themeBtn.addEventListener("click", function () {
  On = !On;
  if (On) {
    document.querySelector(".container").style.backgroundColor = "var(--cta)";
    document.querySelector("aside").style.backgroundColor = "var(--cta)";
    document.querySelector("main").style.backgroundColor = "var(--cta)";
    document.querySelector(".container").style.color = "var(--secondary-li)";
    document.querySelector("aside").style.color = "var(--secondary-li)";
    document.querySelector("main").style.color = "var(--secondary-li)";
  } else if (!On) {
    document.querySelector(".container").style.backgroundColor = "inherit";
    document.querySelector("aside").style.backgroundColor = "inherit";
    document.querySelector("main").style.backgroundColor = "inherit";
    document.querySelector(".container").style.color = "inherit";
    document.querySelector("aside").style.color = "inherit";
    document.querySelector("main").style.color = "inherit";
  }
});
