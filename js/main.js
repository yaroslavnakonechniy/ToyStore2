let burger = document.querySelector('.header__menu-burger');
let headerContact = document.querySelector('.header__contact');
let headerMenu = document.querySelector('.header__menu');
let headerMenuButtons = document.querySelector('.header__menu-buttons');
let headerNavigation = document.querySelector('.header__navigation');
let headerNavigationList = document.querySelector('.header__navigation-list');

burger.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    burger.classList.toggle('burger-active');
    headerContact.classList.toggle('display-none');
    headerMenuButtons.classList.toggle('display-none');
    headerMenu.classList.toggle('menu-active');
    headerNavigation.classList.toggle('navigation-active');
    headerNavigationList.classList.toggle('navigation-list-active');

});
