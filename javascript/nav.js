let iconContainer = document.querySelector('.menu-icon-container');

let mainNavContainer = document.querySelector('.main-nav-container');
// let mainNavContainerClicked = document.querySelector('.main-nav-container-clicked');
let largeTransitionalNavContainer = document.querySelector('.large-transitional-nav-container');
let navUl = document.querySelector('.nav-ul');
let links = document.querySelectorAll('.nav-ul-li');
let bottomFiller = document.querySelector('.nav-bottom-filler');
let socials = document.querySelector('.socials-container');

const toggleNavClasses = () => {
    mainNavContainer.classList.toggle("main-nav-container-clicked");
    largeTransitionalNavContainer.classList.toggle("large-transitional-nav-container-clicked");
    navUl.classList.toggle("nav-ul-clicked");
    links.forEach((link) => {
       link.classList.toggle("nav-ul-li-clicked");
    })
    bottomFiller.classList.toggle("nav-bottom-filler-clicked");

    document.body.classList.toggle("blurred-body")

}

iconContainer.addEventListener('click', toggleNavClasses);


window.addEventListener('click', (e) => {
    if (e.target.classList.contains("nav-ul-clicked")) {
        toggleNavClasses();
    }

})

// EXPORTS
export default mainNavContainer;