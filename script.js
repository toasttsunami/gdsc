const header = document.querySelector(".header-cont");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});



const addEventOnElements = function (elements, enevtType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventOnElements(eventType, callback);
    }
}

const navToggle = document.querySelectorAll("header__btn");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggle, "click", toggleNav);

document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('[data-nav-toggle]');
    var sidebar = document.querySelector('.sidebar');

    navToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
});