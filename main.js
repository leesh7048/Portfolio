// navbar scroll
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

function scroll_navbar() {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--bg");
  } else {
    navbar.classList.remove("navbar--bg");
  }
}
document.addEventListener("scroll", scroll_navbar);

// navbar menu scroll
const navbarMenu = document.querySelector(".navbar__menu");

function navbarMenuClick(e) {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    scroll(link);
  }
}
navbarMenu.addEventListener("click", navbarMenuClick);

//home contact btn scroll

const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", () => {
  scroll("#contact");
});

function scroll(selector) {
  const contactTo = document.querySelector(selector);
  contactTo.scrollIntoView({ behavior: "smooth" });
}

//home scroll opacity
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
function homeScroll() {
  home.style.opacity = 1 - window.scrollY / homeHeight;
}

document.addEventListener("scroll", homeScroll);
// ArrowBtn visible
document.addEventListener("scroll", arrowBtnScroll);
function arrowBtnScroll() {
  if (homeHeight < window.scrollY) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
}

// Arrow up
const arrowBtn = document.querySelector(".arrow-up");
function arrowBtnClick() {
  scroll("#home");
}

arrowBtn.addEventListener("click", arrowBtnClick);
