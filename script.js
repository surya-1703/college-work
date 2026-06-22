// ==================== MOBILE MENU TOGGLE ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items for animation
document.querySelectorAll('.skill-card, .project-card, .cert-card, .achievement-item, .contact-item, .education-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== NAVBAR SCROLL EFFECT ==================== 
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const navbarHeight = navbar.offsetHeight;
    
    if (window.scrollY > navbarHeight) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = window.scrollY;
});

// ==================== SCROLL TO TOP INDICATOR ==================== 
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Optional: Add a scroll progress indicator
    // You can create a progress bar element and update it here
});

// ==================== ACTIVE NAV LINK ==================== 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== FORM VALIDATION (OPTIONAL) ==================== 
const downloadResumeBtn = document.querySelector('.btn-secondary');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #0056b3, #0069d9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0, 86, 179, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = '📄 Resume download feature will be added soon!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
});

// ==================== SCROLL ANIMATIONS ==================== 
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

// ==================== TYPING ANIMATION EFFECT (OPTIONAL) ==================== 
function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==================== PAGE LOAD ANIMATION ==================== 
window.addEventListener('load', () => {
    // Add fade-in animation to body
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// ==================== SMOOTH PAGE TRANSITIONS ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Set initial scroll position to top
    window.scrollTo(0, 0);
    
    // Add loading class to body
    document.body.classList.add('loaded');
});

// ==================== KEYBOARD SHORTCUTS ==================== 
document.addEventListener('keydown', (e) => {
    // Press 'H' to scroll to hero section
    if (e.key.toLowerCase() === 'h') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'C' to scroll to contact section
    if (e.key.toLowerCase() === 'c') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ==================== EASTER EGG - KONAMI CODE ==================== 
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    const key = e.key === ' ' ? ' ' : e.code;
    
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Create confetti effect
    createConfetti();
    
    // Show message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0056b3, #0069d9);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 10px 40px rgba(0, 86, 179, 0.3);
        text-align: center;
    `;
    message.textContent = '🎉 You found an Easter Egg! 🎉\nAwesome! 😄';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function createConfetti() {
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: #${Math.floor(Math.random() * 16777215).toString(16)};
            left: ${Math.random() * 100}%;
            top: -10px;
            z-index: 9999;
            border-radius: 50%;
            pointer-events: none;
        `;
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const xMove = (Math.random() - 0.5) * 200;
        const rotation = Math.random() * 360;
        
        confetti.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${xMove}px, ${window.innerHeight + 10}px) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// ==================== PERFORMANCE OPTIMIZATION ==================== 
// Lazy loading images (if needed in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== PRINT STYLESHEET ==================== 
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = '#fff';
    document.querySelectorAll('.navbar, .footer').forEach(el => {
        el.style.display = 'none';
    });
});

window.addEventListener('afterprint', () => {
    document.querySelectorAll('.navbar, .footer').forEach(el => {
        el.style.display = '';
    });
});

// ==================== CONSOLE MESSAGE ==================== 
console.log('%c👋 Welcome to Alex Johnson\'s Portfolio!', 'font-size: 20px; color: #0056b3; font-weight: bold;');
console.log('%cLooking for the source code? Check out GitHub!', 'font-size: 14px; color: #666;');
console.log('%cPro Tip: Press H to go to Home, Press C to go to Contact!', 'font-size: 12px; color: #999; font-style: italic;');
console.log('%c🎮 Secret: Try the Konami Code! ⬆⬆⬇⬇⬅➡⬅➡BA', 'font-size: 12px; color: #0069d9; font-weight: bold;');