const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-mobile');

menuToggle.addEventListener('click', function() {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('open');
  menu.style.backgroundColor = 'white'
})

