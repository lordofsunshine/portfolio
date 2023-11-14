window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    header.classList.add('fixed');
    header.classList.add('title');
  } else {
    header.classList.remove('fixed');
    header.classList.remove('title');
  }
});
