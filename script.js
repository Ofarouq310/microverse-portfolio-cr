const hamburger = document.querySelector('.fa-bars');
const MBMenu = document.querySelector('.mb_menu');
const cross = document.querySelector('#x_icon');
const menuItems = document.getElementsByClassName('menu_list_items');

hamburger.addEventListener('click', () => {
  MBMenu.style.display = 'block';
});

cross.addEventListener('click', () => {
  MBMenu.style.display = 'none';
});

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    MBMenu.style.display = 'none';
  });
}