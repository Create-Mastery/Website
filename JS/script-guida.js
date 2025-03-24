const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    if (window.scrollY > 200) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
};
menuToggle.addEventListener('click', function () {
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth > 1300) {
        navList.style.display = 'flex';
    } else {
        navList.style.display = 'none';
    }
});
