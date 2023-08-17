const screenplayButton = document.getElementById('screenplayButton');
const filmButton = document.getElementById('filmButton');
const submenu = document.querySelector('.submenu');
const submenuButtons = document.querySelectorAll('.submenu-button');

screenplayButton.addEventListener('click', () => {
    submenu.classList.toggle('show');
});

filmButton.addEventListener('click', () => { // Add this block
    const filmSubmenu = filmButton.nextElementSibling;
    filmSubmenu.classList.toggle('show');
});

submenuButtons.forEach(submenuButton => {
    submenuButton.addEventListener('click', () => {
        submenuButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        submenuButton.classList.add('active');
    });
});