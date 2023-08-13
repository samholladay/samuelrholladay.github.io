const menuBtns = document.querySelectorAll('.menu-btn');
const submenus = document.querySelectorAll('.submenu');

menuBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    submenus.forEach((submenu, i) => {
      if (index === i) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      } else {
        submenu.style.display = 'none';
      }
    });
  });
});
