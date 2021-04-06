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
    const selected = document.querySelector(".navbar__menu__item.selected");
    selected.classList.remove("selected");
    target.classList.add("selected");
    navbarMenu.classList.remove("display");
    scroll(link);
  }
}
navbarMenu.addEventListener("click", navbarMenuClick);

//navbar toggle btn
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", toggleClick);
function toggleClick() {
  navbarMenu.classList.toggle("display");
}

//home contact btn scroll
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scroll("#contact");
});

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

// observer
// 1. 모든 섹션 요소들과 메뉴아이템을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionsIds = ["#home", "#about", "#skills", "#work", "#contact"];
const navItems = sectionsIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);
const sections = sectionsIds.map((id) => document.querySelector(id));

let selectedNavItem = navItems[0];
let selectedNavIndex;
function selectNavItem(selected) {
  selectedNavItem.classList.remove("selected");
  selectedNavItem = selected;
  selectedNavItem.classList.add("selected");
}

function scroll(selector) {
  const contactTo = document.querySelector(selector);
  contactTo.scrollIntoView({ behavior: "smooth" });
  selectNavItem(navItems[sectionsIds.indexOf(selector)]);
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    //진입할때는 !뺴고
    //빠져나갈때
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionsIds.indexOf(`#${entry.target.id}`);

      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
}, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.round(window.scrollY + window.innerHeight) ===
    document.body.scrollHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});

// const options = {
//   root: null,
//   rootMargin: "00px 0px 0px 0px",
//   threshold: 0.6,
// };
// const observer = new IntersectionObserver(function (entries) {
//   entries.forEach((entry) => {
//     const id = entry.target.id;
//     const li = document.querySelector(`[data-link="#${id}"]`);

//     if (entry.isIntersecting) {
//       li.classList.add("selected");
//     } else {
//       li.classList.remove("selected");
//     }
//   });
// }, options);

// const sections = document.querySelectorAll("section");

// sections.forEach((section) => observer.observe(section));

//map은 새로운 변수(const aaa)에 리턴된 배열값을 넣어 생성한다
//forEach는 그 배열 자체에서 변경된다
