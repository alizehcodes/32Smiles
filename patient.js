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




     // Cursor 
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
    
        // backtotopbutton 
        const backToTopButton = document.getElementById("backToTop");
    
        // Jab user scroll karega, tab button show hoga
        window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
        };
    
        // Jab button click hoga, page smooth scroll hoga top par
        backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
