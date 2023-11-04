window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
