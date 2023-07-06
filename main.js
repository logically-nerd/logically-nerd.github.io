//type animation
var typed = new Typed(".tags", {
    strings: ["Competitive Programmer", "Developer", "AI/ML Enthusiast", "Designer", "Badminton Player"],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true
});

//smooth scroll
var navLinks = document.querySelectorAll("nav ul li a");

for (var i = 0; i < navLinks.length-1; i++) {
    navLinks[i].addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        var sectionId = this.getAttribute("href"); // Get the ID of the section
        var section = document.querySelector(sectionId); // Find the section element
        section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    });
}

//hamburger menu
var x = document.querySelector("nav ul");
var y = document.querySelector(".hamburger");
function myFunction() {
    x.classList.toggle("ul_block");
    y.classList.toggle('opened');
    y.setAttribute('aria-expanded', y.classList.contains('opened'));
}


//multiple titles

let titleText = ["Welcome to my website", "Adnan Shahid | logically-nerd"];
let counter = 0;
setInterval(function () {
    document.title = titleText[counter % titleText.length];
    counter++;
}, 5000)

//active section

var navLinks = document.querySelectorAll("nav ul li a");
var sections = document.querySelectorAll("section");

// Update the active section when the user scrolls
window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Loop through the sections and check which one is currently visible
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            // If the section is visible, add the "active" class to the corresponding link in the navbar
            var link = document.querySelector('nav ul li a[href="#' + section.id + '"]');
            if (link) {
                link.classList.add("active");
            }
        } else {
            // If the section is not visible, remove the "active" class from the corresponding link in the navbar
            var link = document.querySelector('nav ul li a[href="#' + section.id + '"]');
            if (link) {
                link.classList.remove("active");
            }
        }
    }
});

// //project section in portfolio

// function toggleDiv(divId) {
//     hideAllDivs();
//     if (divId == all) {
//         var divs = document.getElementsByTagName("#portfolio .projects div");
//         for (var i = 0; i < divs.length; i++) {
//             divs[i].style.display = "block";
//         }
//     }
//     else {
//         var div = document.getElementById(divId);
//         div.style.display = "block";
//     }
// }

// function hideAllDivs() {
//     var divs = document.getElementsByTagName("#portfolio .projects div");
//     for (var i = 0; i < divs.length; i++) {
//         divs[i].style.display = "none";
//     }
// }

//infinite scrolling in portfolio
var container = document.querySelector('#portfolio .projects');
var content = container.innerHTML;
var maxClones = 10; 
var i = 1;
while (container.offsetWidth <= content.length * i && i <= maxClones) {
    container.innerHTML += content;
    i++;
}
container.addEventListener('scroll', function () {
    if (container.scrollLeft == 0) {
        // Clone content to the left
        for (var j = 1; j <= maxClones; j++) {
            container.innerHTML = content + container.innerHTML;
        }
        container.scrollLeft = content.length;
    } else if (container.scrollLeft + container.clientWidth == container.scrollWidth) {
        // Clone content to the right
        for (var j = 1; j <= maxClones; j++) {
            container.innerHTML += content;
        }
    }
});
