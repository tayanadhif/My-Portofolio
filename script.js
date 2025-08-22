// Global Variables
let isMobileMenuOpen = false;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Setup scroll handler for navbar
    setupNavbarScroll();
    
    // Setup contact form
    setupContactForm();
    
    // Setup smooth scrolling for older browsers
    setupSmoothScrolling();
}

// Navigation Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger i');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
    } else {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    }
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
}

// Contact Form Functions
function setupContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleContactFormSubmit);
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    // Clear previous errors
    clearFormErrors();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Validate form
    if (!validateForm(formData)) {
        return;
    }
    
    // Show loading state
    setFormLoading(true);
    
    // Simulate form submission (since we don't have a backend)
    simulateFormSubmission(formData);
}

function validateForm(data) {
    let isValid = true;
    
    // Name validation
    if (!data.name) {
        showFieldError('nameError', 'Name is required');
        isValid = false;
    } else if (data.name.length < 2) {
        showFieldError('nameError', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Email validation
    if (!data.email) {
        showFieldError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(data.email)) {
        showFieldError('emailError', 'Please enter a valid email');
        isValid = false;
    }
    
    // Subject validation
    if (!data.subject) {
        showFieldError('subjectError', 'Subject is required');
        isValid = false;
    }
    
    // Message validation
    if (!data.message) {
        showFieldError('messageError', 'Message is required');
        isValid = false;
    } else if (data.message.length < 10) {
        showFieldError('messageError', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = message;
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function setFormLoading(loading) {
    const submitButton = document.querySelector('[data-testid="button-submit"]');
    const btnText = submitButton.querySelector('.btn-text');
    const btnLoading = submitButton.querySelector('.btn-loading');
    
    if (loading) {
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitButton.disabled = true;
    } else {
        btnText.style.display = 'flex';
        btnLoading.style.display = 'none';
        submitButton.disabled = false;
    }
}

function simulateFormSubmission(formData) {
    // Simulate API call delay
    setTimeout(() => {
        // Log the form data (since we don't have a real backend)
        console.log('Contact form submitted:', formData);
        
        // Show success message
        showToast(
            'Message sent successfully!',
            'Thank you for your message. I\'ll get back to you within 24 hours.',
            'success'
        );
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Remove loading state
        setFormLoading(false);
        
    }, 2000); // 2 second delay to simulate network request
}

// Toast Functions
function showToast(title, description, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastDescription = document.getElementById('toastDescription');
    const toastIcon = toast.querySelector('.toast-icon');
    
    // Set content
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    // Set type classes
    toast.className = `toast ${type}`;
    
    // Set icon based on type
    if (type === 'success') {
        toastIcon.className = 'toast-icon fas fa-check-circle';
    } else if (type === 'error') {
        toastIcon.className = 'toast-icon fas fa-exclamation-circle';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
}

// Smooth scrolling fallback for older browsers
function setupSmoothScrolling() {
    // This is mainly for older browsers that don't support scroll-behavior: smooth
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Polyfill smooth scrolling
        const links = document.querySelectorAll('button[onclick*="scrollToSection"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('onclick').match(/scrollToSection\('(.+)'\)/)[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    smoothScrollTo(targetElement.offsetTop - 80, 800);
                }
            });
        });
    }
}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Intersection Observer for animations (optional enhancement)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.skill-card, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when the page loads
document.addEventListener('DOMContentLoaded', function() {
    setupScrollAnimations();
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on window resize
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // Close mobile menu on Escape key
    if (event.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
    }
    
    // Close toast on Escape key
    if (event.key === 'Escape') {
        hideToast();
    }
});

// Prevent form submission on enter in input fields (except textarea)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA' && event.target.tagName !== 'BUTTON') {
        const form = event.target.closest('form');
        if (form && form.id === 'contactForm') {
            event.preventDefault();
        }
    }
});

// Add some extra functionality for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add focus classes for better keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focus-visible');
        });
    });
});

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);