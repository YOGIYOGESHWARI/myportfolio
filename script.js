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
const scriptURL = 'https://script.google.com/macros/s/AKfycbzqXNdi2g9bqUBq4f-XT6gI-WK2cn3STgSojraHWJBbBww6Yzc3D2rTeUNU35ozV_NKsQ/exec';
const form = document.forms['submit-to-google-sheet'];
const popup = document.getElementById("popup");
const msg = document.getElementById("msg");
const closePopup = document.getElementById("closePopup");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        msg.textContent = "Message sent successfully!";
      } else {
        msg.textContent = "Failed to send message.";
      }
      showPopup();

      // Clear the form after showing the message
      form.reset();
    })
    .catch((error) => {
      console.error('Error!', error.message);
      msg.textContent = "Error sending message.";
      showPopup();
    });
});

function showPopup() {
  popup.style.display = "flex"; // Show the popup

  // Hide the popup after 5 seconds
  setTimeout(() => {
    popup.style.display = "none";
    msg.textContent = ""; // Clear the message content
  }, 5000);
}

// Close popup when 'X' is clicked
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});





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



















































































