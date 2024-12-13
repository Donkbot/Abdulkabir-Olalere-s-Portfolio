// JavaScript for Interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Image Slideshow for Projects
    const projects = document.querySelectorAll(".project");
  
    projects.forEach(project => {
      const images = project.querySelectorAll("img");
      if (images.length > 1) {
        let currentIndex = 0;
  
        setInterval(() => {
          images[currentIndex].classList.remove("active");
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add("active");
        }, 3000); // Change image every 3 seconds
      }
    });
  
    // Contact Form Validation (if added)
    const contactForm = document.querySelector("#contact form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", event => {
        event.preventDefault();
  
        const email = contactForm.querySelector("input[name='email']").value;
        const message = contactForm.querySelector("textarea[name='message']").value;
  
        if (!email || !message) {
          alert("Please fill out all fields.");
        } else {
          alert("Thank you for your message! I'll get back to you soon.");
          contactForm.reset();
        }
      });
    }
  });
  

  let age = 24
  console.log(age)