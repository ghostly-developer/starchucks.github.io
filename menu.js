
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');
const navMenu = document.querySelector('#menu-nav');

function extendMenu(){
    console.log("Changed Active");
    navMenu.classList.toggle('is-hidden');
    navLinks.classList.toggle('is-active');
    navLinks.addEventListener('click', function(){
        event.preventDefault();
        navLinks.classList.toggle('is-hidden')
        navMenu.classList.toggle('is-active');
    });


}
