  const swiper = new Swiper('.swiper-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 60,
    // initialSlide: 1,
    loop: true,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 5,
    },

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },

    pagination: {
      el: '.slider__pagination',
      type: 'fraction'
    },


  });


