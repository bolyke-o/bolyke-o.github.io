document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.header-nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('unscroll');
    resetMobMenu();
  })

  /* Home sliders */
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

  let swiperSources = new Swiper(".sources-swiper", {
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
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      1025: {
        slidesPerView: 3,
        loop: false,
        centeredSlides: false,
      },
    },
  });
  /* Home sliders end */
  if (document.querySelector('#subModal')) {
    document.querySelector('#subModal').addEventListener('shown.bs.modal', (e) => {
        initSwiperSubs();
    })
  } else {
    initSwiperSubs();
  }
  function initSwiperSubs () { 
    let swiperSubs = new Swiper(".subs-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      },
    });
  }

  

  /* Account sliders */
    let swiperRobots = new Swiper('.robots-swiper', {
      enabled: false,
      breakpoints: {
        768: {
          enabled: true,
          spaceBetween: 16,
          slidesPerView: 'auto',
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="pagination-number ' + className + '">' + (index + 1) + "</span>";
            },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      },
    });
    

  
  /* Account sliders end */
});

