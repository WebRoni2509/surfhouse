
const clearBtn = document.querySelector('.clear-input');
const searchInput = document.querySelector('.search-input');
clearBtn.addEventListener('click', () => searchInput.value = '');

const toggleMenu = document.querySelector('.toggle-menu');


const menu = document.querySelector('.mobile-menu-wrapper'); 
window.onload = function () { 
  menu.classList.remove = 'show-menu';
 }
const showHideMenu = () =>{
  menu.classList.toggle('show-menu');
}  

      