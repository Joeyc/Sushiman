document.addEventListener('DOMContentLoaded', function (event) {
  const sushi = document.querySelector('.header__menu-mobile');
  const menu = document.querySelector('.header__menu');

  sushi.addEventListener('click', function () {
    console.log(menu.classList);
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  });
});
