// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of element is visible
});

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Subtle Parallax effect for Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.7 + 'px';
});
