'use strict';

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
});

$('.slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
});

{
  const menuItems = document.querySelectorAll('.tab-menu ul li a');
  const contents = document.querySelectorAll('.tab-menu-show');

  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active-1');
      });

      item.classList.add('active-1');

      contents.forEach(content => {
        content.classList.remove('active-2');
      });
      document.getElementById(item.dataset.id).classList.add('active-2');
    });
  });
}