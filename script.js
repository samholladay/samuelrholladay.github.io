const portfolioButton = document.getElementById('portfolioButton');
const submenu = document.querySelector('.submenu');
const submenuButtons = document.querySelectorAll('.submenu-button');

portfolioButton.addEventListener('click', () => {
    submenu.classList.toggle('show');
});

submenuButtons.forEach(submenuButton => {
    submenuButton.addEventListener('click', () => {
        submenuButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        submenuButton.classList.add('active');
    });
});