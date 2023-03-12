const refs = {
  openMenu: document.querySelector('.open-menu'),
  closeMenu: document.querySelector('.close-menu'),
  modal: document.querySelector('.modal-menu'),
  list: document.querySelector('.modal-menu__list')
};

const menuToggle = () => {
  refs.modal.classList.toggle('hidden');
  document.addEventListener('keydown', escCloseModal);
};

const modalMenuClose = e => {
  if (e.target.className === 'backdrop') {
    menuToggle();
    document.removeEventListener('keydown', escCloseModal);
  }
};

const escCloseModal = e => {
    if ((e.key === "Escape")) {
    menuToggle();
document.removeEventListener('keydown', escCloseModal);
  }
};

refs.openMenu.addEventListener('click', menuToggle);

refs.closeMenu.addEventListener('click', menuToggle);

refs.modal.addEventListener('click', modalMenuClose);

refs.list.addEventListener('click', menuToggle)

