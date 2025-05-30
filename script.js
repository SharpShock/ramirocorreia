// Reveal animations on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / docHeight;

    // Change background based on scroll percent
    const body = document.body;

    if (scrollPercent < 0.2) {
        body.style.background = "black";
    } else {
        body.style.background = `linear-gradient(
            rgba(0, 0, 0, ${1 - scrollPercent}),
            rgba(0, 0, 0, ${1 - scrollPercent})
        ), url('assets/imgs/ramiro_novo.png')`;
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";
    }
});