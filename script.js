// 1. Navbar Click Handling (Active State)
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// 2. Initialize Animations (AOS)
AOS.init({
    duration: 1000,
    once: false, // Animates every time you scroll
    mirror: true
});