// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
const ANIMATION_TIME = 1500;
const FRAMES_COUNT = 120;

const animateAnchors = () => {
  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
    // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.scrollY;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / FRAMES_COUNT;

        if (window.innerHeight + window.scrollY + scrollBy >= document.body.offsetHeight) {
          clearInterval(scroller);
        } else
        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.scrollY - coordY && window.innerHeight + window.scrollY < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      // время интервала равняется частному от времени анимации и к-ва кадров
      }, ANIMATION_TIME / FRAMES_COUNT);
      document.body.style.overflow = 'auto';
    });
  });
};

export {animateAnchors};
