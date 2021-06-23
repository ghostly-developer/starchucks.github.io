//for mobile menu

const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', function(){
    console.log("Changed Active");
    burgerIcon.classList.toggle('is-active');
    navLinks.classList.toggle('is-active');
});