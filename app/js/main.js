
const clearBtn = document.querySelector('.clear-input');
const searchInput = document.querySelector('.search-input');
clearBtn.addEventListener('click', () => searchInput.value = '');

const toggleMenu = document.querySelector('.toggle-menu');
const mobileMenuOverlay = document.querySelector('.mobile-bg');
const body = document.querySelector('body');

const menu = document.querySelector('.mobile-menu-wrapper'); 
window.onload = function () { 
  menu.classList.remove = 'show-menu';
 }
const showHideMenu = () =>{
  menu.classList.toggle('show-menu');
  toggleMenu.classList.toggle('menu-close')
  mobileMenuOverlay.classList.toggle('show-overlay');
  body.classList.toggle('no-scroll')
}  

      