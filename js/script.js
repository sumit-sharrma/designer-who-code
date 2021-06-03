
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").className = "header header__shadow";
    } else {
        document.getElementById("header").className = "header";
    }
}