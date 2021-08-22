let nav = document.querySelector("nav");
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
