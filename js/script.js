new SimpleSlide({
  slide: "principal",
  nav: true,
  auto: true,
  time: 4000,
  pauseOnHover: true,
});

tippy(".myButton", {
  content: "Total segurança para o seu evento em todos os momentos, da entrada a consumação.",
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

const tabLink = document.querySelectorAll('.nav-toggle');
const tabTeste = document.querySelectorAll('.menu-mobile');

if (tabLink.length) {
  // tabLink[0].classList.add('ativoLink');

  function activeTab(index) {
    tabTeste.forEach((section) => {
      section.classList.remove('active');
    })

    tabTeste[index].classList.add('active');  
  }

  tabLink.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    })
  })
}