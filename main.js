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

// my work

const workCategories = document.querySelector(".work__categories");
const workProjects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workCategories.addEventListener("click", workCategoriesClick);

function workCategoriesClick(e) {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }
  //선택 버튼 색넣기
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  workProjects.classList.add("ani-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    workProjects.classList.remove("ani-out");
  }, 300);
}
