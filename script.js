window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Если страница прокручена на 50px, добавляем класс 'fixed'
  if (scrollPosition > 100) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});