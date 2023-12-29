const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.title-section__button');
const modalBtnClose = document.querySelector('.backdrop__close-modal-button');

const toggleModal = () => modal.classList.toggle('backdrop--is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);