// Initialize EmailJS
emailjs.init("l4mXMV3qYMkDoMjOV"); // Add your public key here

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("service_8mk38a9", "template_a0ak3is", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        alert("Message sent successfully!");
        // Reset the form after successful submission
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
    });
});
function scrollToSection(collections) {
    const section = document.getElementById(collections);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.textContent = "☰";
    document.querySelector(".navbar").appendChild(hamburger);
    
    hamburger.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("show");
    });
});

