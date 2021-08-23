let nav = document.querySelector("nav");
let navBtn = document.querySelector("#navBtn");
let navList = nav.querySelector("ul");

/* SHOW MENU LIST */
window.addEventListener("resize", checkWidth);
navBtn.addEventListener("click", showMenu);

function showMenu() {
  navList.classList.toggle("active");
}

function checkWidth() {
  navList.classList.remove("active");
}

/* NAV BAR ADD SHADOW */
checkScroll();
window.addEventListener("scroll", checkScroll);
function checkScroll() {
  let position = window.scrollY;
  if (position > 100) {
    nav.classList.add("shadow");
  } else {
    nav.className = "";
  }
}

/* SLIDER UTISCI */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
