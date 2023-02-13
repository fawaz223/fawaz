const navMenu = document.getElementById('nav-menu');
const navList = document.getElementById('nav-list');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  navMenu.classList.toggle('fa-xmark');
})