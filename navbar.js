window.onscroll = function () { stickyNavbar() };
window.onresize = function () { stickyNavbar() };
window.onload = function () { stickyNavbar() };

var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

}

function navExpand() {
    if (navbar.classList.contains("bounceInLeft")) {
        navbar.classList.add("bounceOutLeft");
        navbar.classList.remove("bounceInLeft")
        sleep(1) // sorry for this travesty
        navbar.classList.add("hidden");
    } else {
        navbar.classList.add("bounceInLeft");
        navbar.classList.remove("bounceOutLeft")
        navbar.classList.remove("hidden");
    }
} 