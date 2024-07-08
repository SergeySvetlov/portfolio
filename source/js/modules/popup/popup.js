const popupButton = document.querySelector('[data-popup]');
const popupMenu = document.querySelector('[data-menu]');

const openPopup = () => {
  popupMenu.classList.toggle('is-open');
};

const onPopupButtonClick = () => {
  popupMenu.classList.remove('is-open');
  popupButton.addEventListener('click', openPopup);
};

export {onPopupButtonClick};
