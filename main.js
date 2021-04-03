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
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
}
navbarMenu.addEventListener("click", navbarMenuClick);
