const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.men');

menuToggle.addEventListener('click', function() {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('open');
});
