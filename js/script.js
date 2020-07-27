new SimpleSlide({
  slide: "principal",
  nav: true,
  auto: true,
  time: 4000,
  pauseOnHover: true,
});

tippy(".myButton", {
  content:
    "Total segurança para o seu evento em todos os momentos, da entrada a consumação.",
  theme: "tomato",
  inlinePositioning: true,
});

var glider = new Glider(document.getElementById("glider"), {
  slidesToShow: 5,
  slidesToScroll: 1,
  rewind: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

function iniciaMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.classList.add("active");
  menu.addEventListener('click', (event) => {
    if(event.target.id == 'fechar'){
      menu.classList.remove('active')
    }
  });
}

const tabLink = document.querySelector(".nav-toggle");
tabLink.addEventListener("click", () => iniciaMenu("menu"));
