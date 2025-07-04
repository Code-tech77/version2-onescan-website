// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect for desktop only
const navbar = document.querySelector('.navbar');
const navLinksContainer = document.querySelector('.nav-links');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > navbar.offsetHeight) {
            navbar.classList.add('scroll-down');
        } else {
            navbar.classList.remove('scroll-down');
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }
});

// Apple-style Intersection Observer for smooth section/card reveals
const appleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // For SVG arrows: restart draw animation
            if (entry.target.classList.contains('timeline-arrow')) {
                const path = entry.target.querySelector('.arrow-path');
                if (path) {
                    path.style.animation = 'none';
                    // Force reflow
                    void path.offsetWidth;
                    path.style.animation = '';
                }
            }
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

// Observe all Apple-style animated elements
[...document.querySelectorAll('.apple-section, .apple-hero, .apple-card, .step, .section-title, .apple-footer, .footer-bottom, .timeline-item, .timeline-arrow')].forEach(el => {
    appleObserver.observe(el);
});

// Intersection Observer for fade-in animations (legacy, for fade-in class)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .step').forEach(element => {
    observer.observe(element);
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// --- Modern Mobile Menu Logic ---
const mobileMenuButton = document.querySelector('.mobile-menu-button');

function toggleMenu() {
    const isMenuOpen = mobileMenuButton.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
    
    // Toggle body scroll to prevent scrolling when the menu is open
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

mobileMenuButton.addEventListener('click', toggleMenu);

// Add functionality to close the menu when a link is clicked
navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Parallax/floating effect for timeline images
function addTimelineParallax() {
    document.querySelectorAll('.timeline-item').forEach(item => {
        const img = item.querySelector('.timeline-img');
        if (!img) return;
        item.addEventListener('mousemove', e => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xMove = ((x / rect.width) - 0.5) * 16;
            const yMove = ((y / rect.height) - 0.5) * 16;
            img.style.transform = `scale(1.09) translateY(-6px) rotate(-2deg) translate(${xMove}px, ${yMove}px)`;
        });
        item.addEventListener('mouseleave', () => {
            img.style.transform = '';
        });
        // Touch support
        item.addEventListener('touchmove', e => {
            if (!e.touches.length) return;
            const rect = item.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            const xMove = ((x / rect.width) - 0.5) * 16;
            const yMove = ((y / rect.height) - 0.5) * 16;
            img.style.transform = `scale(1.09) translateY(-6px) rotate(-2deg) translate(${xMove}px, ${yMove}px)`;
        });
        item.addEventListener('touchend', () => {
            img.style.transform = '';
        });
    });
}
addTimelineParallax();

// --- Timeline modal logic ---
const timelineSteps = [
    {
        img: 'images/img99.jpg',
        title: 'Inspiration & Idea',
        desc: 'The initial spark: identifying the need for secure, one-time QR codes and brainstorming the OneScan concept.'
    },
    {
        img: 'images/img4.jpeg',
        title: 'Idea Research',
        desc: 'The initial spark: identifying the need for secure, one time QR codes and brainstorming the OneScan concept.'
    },
    {
        img: 'images/img1.jpeg',
        title: 'Prototype Built',
        desc: 'A working prototype was developed, allowing for the first real tests of the OneScan experience.'
    },
    {
        img: 'images/img3.jpeg',
        title: 'Working on the Backend',
        desc: 'In that stage I was working on the backend of the app, I was using the backend as a service framework to build the backend of the app toward having only the QR Code only scanable once in effective manner .'
    },
    {
        img: 'images/img5.jpeg',
        title: 'Polish & Design',
        desc: 'Final design touches, performance improvements, and bug fixes made OneScan ready for launch.'
    },
    {
        img: 'images/img6.jpeg',
        title: 'App Store Launch',
        desc: 'OneScan is released to the world, empowering users with secure, one time QR code generation.'
    }
];

const modal = document.getElementById('timeline-modal');
const modalImg = modal.querySelector('.timeline-modal-img');
const modalTitle = modal.querySelector('.timeline-modal-title');
const modalDesc = modal.querySelector('.timeline-modal-desc');
const modalClose = modal.querySelector('.timeline-modal-close');
const modalBackdrop = modal.querySelector('.timeline-modal-backdrop');

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        const step = timelineSteps[idx];
        if (!step) return;
        modalImg.src = step.img;
        modalImg.alt = step.title;
        modalTitle.textContent = step.title;
        modalDesc.textContent = step.desc;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    });
});

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 350);
}
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
    if (modal.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
        closeModal();
    }
});

// --- WHY PAGE: Fade-in-up for all animated elements including hero image ---
if (window.location.pathname.endsWith('why.html')) {
    function revealOnLoad(selector) {
        document.querySelectorAll(selector).forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in-up').forEach(el => {
        fadeObserver.observe(el);
    });
    // Reveal immediately if in viewport
    revealOnLoad('.fade-in-up');
    // Also ensure hero image gets .visible for smooth fade-in
    var heroImg = document.querySelector('.secure-hero-img');
    if (heroImg) setTimeout(() => heroImg.classList.add('visible'), 200);

    // --- WHY HERO TITLE STAGGERED ANIMATION ---
    const heroTitle = document.querySelector('.why-hero-title-animated');
    if (heroTitle) {
        const spans = heroTitle.querySelectorAll('span');
        spans.forEach((span, idx) => {
            span.style.animationDelay = (0.08 * idx) + 's';
        });
        // Ensure .visible is present for animation
        heroTitle.classList.add('visible');
    }
} 