function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect -------------->
const texts = [
    "YOUR SMILE",
    "YOUR CONFIDENCE!",
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter


// backtotopbutton --------------->

const backToTopButton = document.getElementById("backToTop");

// button show hoga
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// top par
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Cursor ----------------->

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");
    const zoomElements = document.querySelectorAll(".text-zoom");

    document.addEventListener("mousemove", function (e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    document.addEventListener("mousedown", function () {
        cursor.classList.add("cursor-grow");
    });

    document.addEventListener("mouseup", function () {
        cursor.classList.remove("cursor-grow");
    });

    zoomElements.forEach(element => {
        element.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.2)";
        });

        element.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});


// Testimonials ---------->

    document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".testimonial-swiper-container", {
      loop: true, 
        autoplay: {
        delay: 3000, 
        disableOnInteraction: false, // Manual interaction ke baad bhi autoplay chalay
        },
        navigation: {
        nextEl: ".testimonial-title-btn-right",
        prevEl: ".testimonial-title-btn-left",
        },
        slidesPerView: 1, 
        spaceBetween: 20, 
        breakpoints: {
        768: { slidesPerView: 2 }, // Tablet
        1024: { slidesPerView: 3 }, // Desktop
        },
    });
    });


// Blog ------------------->

    var swiper = new Swiper(".swiper-blog-container", {
        slidesPerView: 3, 
        spaceBetween: 20, 
        loop: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".team-controller",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });


// Header -------------->

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const navLinks = document.querySelector(".dropdown");
    const hamburgIcon = document.querySelector(".hamburg");
    const cancelIcon = document.querySelector(".cancel");
    const dropdownLists = document.querySelectorAll(".dropdown-list");
    const navContainerLinks = document.querySelector(".nav-container .links");
    const submenuButtons = document.querySelectorAll(".submenu-toggle");

    function updateMenuDisplay() {
        if (window.innerWidth <= 768) {
            hamburgIcon.style.display = "block";
            cancelIcon.style.display = "none";
            navContainerLinks.style.display = "none";
            navLinks.style.display = "none";  // Ensure dropdown is hidden initially
        } else {
            hamburgIcon.style.display = "none";
            cancelIcon.style.display = "none";
            navContainerLinks.style.display = "flex";
            navLinks.style.display = "none";  // Hide dropdown for large screens
        }
    }

    updateMenuDisplay();  // Call on page load

    // Open mobile menu
    hamburgIcon.addEventListener("click", function () {
        navLinks.style.display = "block";
        setTimeout(() => {
            navLinks.style.transform = "translateY(0)";
        }, 10);
        hamburgIcon.style.display = "none";
        cancelIcon.style.display = "block";
    });

    // Close mobile menu
    cancelIcon.addEventListener("click", function () {
        navLinks.style.transform = "translateY(-500px)";
        setTimeout(() => {
            navLinks.style.display = "none";
        }, 300);
        cancelIcon.style.display = "none";
        hamburgIcon.style.display = "block";
    });

    // Submenu toggle functionality
    submenuButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        });
    });

    // Handle screen resize for responsiveness
    window.addEventListener("resize", updateMenuDisplay);
});


// Footer form validation ------->
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("emailInput");
    const errorMessage = document.getElementById("error-message");

    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
        errorMessage.style.display = "none";
        alert("Signup successful! ✅");
        emailInput.value = ""; // Clear input after successful validation
    } else {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
    }
});