document.addEventListener("DOMContentLoaded", function () {
  let mainWrapper = document.querySelector('body');
  let overlay = document.querySelector('.overlay');
  let aside = document.querySelector('.aside');
  let asideBtn = document.querySelector('.aside__btn');

  asideBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
    aside.classList.toggle('active');
    mainWrapper.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    aside.classList.remove('active');
    mainWrapper.classList.remove('no-scroll');
  });
});