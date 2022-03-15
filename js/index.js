const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//sticky nav bar
window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav-toggle");

var sticky = navToggle.offsetTop;

function myFunction() {
    if  (window.pageYOffset >= sticky) {
        nav-toggle.classList.add("sticky")
    } else {
        nav-toggle.classList.remove("sticky");
    }
}