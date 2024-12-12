// Navigation active link functionality
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll to sections functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Hero section button functionality
const heroButton = document.querySelector('.hero .btn');

if (heroButton) {
    heroButton.addEventListener('click', function () {
        const storiesSection = document.querySelector('.stories');
        storiesSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Subscribe functionality
const subscribeForm = document.querySelector('.subscribe form');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const emailValue = emailInput.value;

        if (emailValue) {
            alert(`Thank you for subscribing with email: ${emailValue}`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}
