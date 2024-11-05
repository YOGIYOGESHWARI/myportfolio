let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => { 
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // Remove active class from all nav links
            navLinks.forEach(links => {
                links.classList.remove("active");
            });

            // Add active class to the current section's nav link
            document.querySelector("header nav a[href*='" + id + "']").classList.add("active");
        }
    });

    // Add sticky class to the header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove the fa-x class and deactivate the navbar when scrolling
    menuIcon.classList.remove("fa-x");
    navbar.classList.remove("active");
};





ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content,heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .service-container,.portfolio-box,.contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about.img',{ oright:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{ oright:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Web Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});



















































































