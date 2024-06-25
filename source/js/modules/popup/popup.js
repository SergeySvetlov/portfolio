const popupButton = document.querySelector('[data-popup]');
const popupMenu = document.querySelector('[data-menu]');

const openPopup = () => {
  popupMenu.classList.toggle('is-closed');
};

const onPopupButtonClick = () => {
  popupMenu.classList.add('is-js', 'is-closed');
  popupButton.addEventListener('click', openPopup);
};

export {onPopupButtonClick};
