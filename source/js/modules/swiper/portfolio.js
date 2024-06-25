const initeSwiperPortfolio = () => {
  const swiperPortfolio = new Swiper('.portfolio__slider-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.portfolio__button--next',
      prevEl: '.portfolio__button--prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  document.querySelector('.portfolio .swiper-slide-duplicate').onfocus = function () {
    document.querySelector('.portfolio .swiper-slide-active').focus();
  };
};

export {initeSwiperPortfolio};
