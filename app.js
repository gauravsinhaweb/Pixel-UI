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
let hamburgerToggle = false;
const hamburger = document.querySelector("#hamburger");
const aside = document.querySelector("#aside");
const wrapperAside = document.querySelector(".wrapper_aside");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburgerToggle = !hamburgerToggle;
  if (hamburgerToggle) {
    aside.style.transform = "translateX(0%)";
    wrapperAside.style.alignItems = "center";
    body.style.overflow = "hidden";
  } else {
    aside.style.transform = "translateX(-100%)";
  }
});

const themeBtn = document.querySelector("#theme");
const container = document.querySelector(".container");
let On = false;
let mediaQuery = window.matchMedia("(max-width: 20rem)");
themeBtn.addEventListener("click", function () {
  On = !On;
  if (On) {
    !mediaQuery.matches
      ? (container.style.overflow = "auto")
      : (container.style.overflow = "inherit");

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
