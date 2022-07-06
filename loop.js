document.body.addEventListener('click', toggleNavigation);

let iconClose = document.querySelector('.icon-close');
let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.mobile-nav');

function toggleNavigation(e) {
    let element = e.target;
    if (element.className === iconClose.className) {
        mobileNav.style.visibility = "hidden";
    }
    else if (element.className == hamburger.className) {
        mobileNav.style.visibility = "visible";
    }
}