const btnMobile = document.getElementById('menu-mobile');
const btnClose = document.getElementById('menu-mobile-close');
function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
  const active = navbar.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
btnClose.addEventListener('touchstart', toggleMenu);