//type animation
var typed = new Typed(".tags", {
    strings: ["Competitive Programmer", "Developer", "Web3 Enthusiast", "Designer", "Badminton Player"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

//hamburger menu
var x = document.querySelector("ul");
var y = document.querySelector(".hamburger");
function myFunction() {
    x.classList.toggle("ul_block");
    // x.style.top = "0vh";
    y.classList.toggle('opened');
    y.setAttribute('aria-expanded', y.classList.contains('opened'));
}

//multiple titles

let titleText = ["Adnan Shahid", "Welcome to my website", "logically-nerd", "Welcome to my website"];
let counter = 0;
setInterval(function () {
    document.title = titleText[counter % titleText.length];
    counter++;
}, 2000)
