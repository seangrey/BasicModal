'use strict';

//Saving the components as variables to be used further down.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelector('.show-modal');

//Functions

//Function adding 'hidden' class to modal and overlay - closes modal and overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Show modal with event listener on click triggers openModal function
showModal.addEventListener('click', openModal);

//Adding event listener to overlay and button with function closeModal above
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

//Keypress event listener for ESC key

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
