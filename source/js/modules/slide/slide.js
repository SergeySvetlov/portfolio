const slides = document.querySelectorAll('[data-slide]');

const openSlide = (i) => {
  i.classList.toggle('is-active');
};

const enableSlides = () => {
  slides.forEach(function (slide) {
    slide.addEventListener('click', () => {
      openSlide(slide);
    });
  });
};

export {enableSlides};
