document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.header-nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('unscroll');
    resetMobMenu();
  })

  let swiperTicker = new Swiper('.ticker-swiper', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: false,
  });

  var swiperSources = new Swiper(".sources-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
        loop: false,
        centeredSlides: false,
      },
    },
  });
});

