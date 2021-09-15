document.addEventListener('DOMContentLoaded', function () {

    //scroll to anchor 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    });
  });

  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.header-nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('unscroll');
  })

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
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
  function initSwiperSubs() {
    let swiperSubs = new Swiper(".subs-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      centeredSlidesBounds: true,
      centerInsufficientSlides: true,
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

  // cources slider
  let swiperCources = new Swiper(".cources-swiper", {
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

  // webinars slider 
  let swiperWebinars = new Swiper('.webinars-swiper', {
    spaceBetween: 24,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // articles slider 
  let swiperArticles = new Swiper('.articles-swiper', {
    spaceBetween: 24,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Account sliders end */

  /* indicator testimonials slider */
  let swiperTestimanials = new Swiper('.testimonials-swiper', {
    spaceBetween: 8,
    slidesPerView: 'auto',
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
      1025: {
        spaceBetween: 48,
      },
    },
  }); 

  /* indicator experts slider */
  let swiperExpert = new Swiper('.expert-swiper', {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
      1025: {
        spaceBetween: 48,
      },
    },
  }); 

  // copy referal link 
  if (document.querySelector('.referal-link')) {
    document.querySelector('.referal-link').addEventListener('click', function (e) {
      e.preventDefault();
      var text = document.querySelector('.referal-link input').select();
      document.execCommand('copy');
    });
  }
});

