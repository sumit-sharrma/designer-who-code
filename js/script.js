
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("header").className = "header header__shadow";
    } else {
        document.getElementById("header").className = "header";
    }
}