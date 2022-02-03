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
