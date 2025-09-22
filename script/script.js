// Function to handle the sticky header and hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Close nav menu when a link is clicked (for mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Update the footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lazy load images
    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });


    // Keyboard accessibility for form submission
    contactForm.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.querySelector('.submit-btn').click();
        }
    });

    // Hero section background image slideshow
    const backgrounds = document.querySelectorAll('.hero-bg');
    let current = 0;

    function nextImage() {
        backgrounds[current].style.opacity = '0';
        current = (current + 1) % backgrounds.length;
        backgrounds[current].style.opacity = '1';
    }

    // Set the first image to be visible initially
    backgrounds[0].style.opacity = '1';

    // Start the slideshow
    // Note: The animation is now handled in CSS using @keyframes for smoother performance.
    // The JavaScript for the slideshow is commented out as the CSS version is better.
});