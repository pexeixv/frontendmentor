"use strict";

bars = document.querySelector('header .bars');
nav = document.querySelector('header .nav'); // darks = document.querySelectorAll('.darken');

main = document.querySelector('main');
bars.addEventListener('click', function () {
  cond = nav.classList.toggle('show');

  if (cond) {
    bars.src = 'img/icon-close.svg';
    main.style.filter = 'brightness(30%)'; // darks.forEach(dark => {
    //     dark.style.filter = 'brightness(30%)';
    // })
  } else {
    bars.src = 'img/icon-hamburger.svg';
    main.style.filter = 'none'; // darks.forEach(dark => {
    //     dark.style.filter = 'none';
    // })
  }
});