document.addEventListener('DOMContentLoaded', function () {
    // Cache DOM elements
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-links');
    const robotContainer = document.getElementById('robot-container');

    // Initialize all functionality
    initTypingAnimation();
    initNavbarScroll();
    if (robotContainer) initRobotInteraction();
    initNavigationSystem();
    initMobileContactActions();
    initAutoHideSuccessMessage();
    initFormSubmission();

    // Mobile menu toggle
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Typing animation
    function initTypingAnimation() {
        const typingText = document.getElementById("typing-text");
        if (!typingText) return;

        const roles = [
            "AI/ML Engineer",
            "Python Developer",
            "BackEnd Developer",
            
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let isAnimationPaused = false;
        let animationFrame;

        function typeRoles() {
            if (isAnimationPaused) return;

            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 1500;
                isAnimationPaused = true;
                setTimeout(() => {
                    isAnimationPaused = false;
                    typeRoles();
                }, typingSpeed);
                return;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500;
                isAnimationPaused = true;
                setTimeout(() => {
                    isAnimationPaused = false;
                    typeRoles();
                }, typingSpeed);
                return;
            }

            clearTimeout(animationFrame);
            animationFrame = setTimeout(typeRoles, typingSpeed);
        }

        setTimeout(typeRoles, 1000);
    }

    // Navbar scroll effect
    function initNavbarScroll() {
        if (!navbar) return;

        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Robot interaction
    function initRobotInteraction() {
        const pupils = document.querySelectorAll('.pupil');
        const robotParts = {
            armLeft: document.querySelector('.arm-left'),
            armRight: document.querySelector('.arm-right'),
            legLeft: document.querySelector('.leg-left'),
            legRight: document.querySelector('.leg-right')
        };

        // Pupil follow mouse
        robotContainer.addEventListener('mousemove', (e) => {
            const rect = robotContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
            const pupilX = Math.cos(angle) * 4;
            const pupilY = Math.sin(angle) * 4;

            pupils.forEach(pupil => {
                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        });

        // Pause animations on hover
        robotContainer.addEventListener('mouseenter', () => {
            Object.values(robotParts).forEach(part => {
                if (part) {
                    part.style.animationPlayState = 'paused';
                    if (part.classList.contains('arm-left')) part.style.transform = 'rotate(15deg)';
                    if (part.classList.contains('arm-right')) part.style.transform = 'rotate(-15deg)';
                    if (part.classList.contains('leg-left')) part.style.transform = 'rotate(5deg)';
                    if (part.classList.contains('leg-right')) part.style.transform = 'rotate(-5deg)';
                }
            });
        });

        robotContainer.addEventListener('mouseleave', () => {
            Object.values(robotParts).forEach(part => {
                if (part) {
                    part.style.animationPlayState = 'running';
                    part.style.transform = '';
                }
            });
            pupils.forEach(pupil => pupil.style.transform = 'translate(0, 0)');
        });
    }

    // Navigation system
    function initNavigationSystem() {
        const sectionUrls = {
            'home': '/',
            'about': '/about/',
            'projects': '/projects/',
            'contact': '/contact/'
        };

        function isDocPage() {
            return window.location.pathname.includes('/docs/');
        }

        function scrollToSection(sectionId, behavior = 'smooth') {
            if (isDocPage()) {
                window.location.href = sectionUrls[sectionId] || '/';
                return;
            }

            const section = document.getElementById(sectionId);
            if (!section) return;

            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const offset = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: offset,
                behavior: behavior
            });

            window.history.replaceState({}, '', sectionUrls[sectionId] || '/');
        }

        // Handle all internal link clicks
        document.querySelectorAll('a[href]').forEach(link => {
            link.addEventListener('click', function (e) {
                if (this.target || (this.href.startsWith('http') && !this.href.startsWith(window.location.origin))) {
                    return;
                }

                if (this.href.includes('/docs/')) return;

                e.preventDefault();
                const url = new URL(this.href);
                const path = url.pathname;
                const currentPath = window.location.pathname;

                if (!isDocPage() && path === '/' && currentPath === '/') {
                    window.location.reload();
                    return;
                }

                let sectionId = 'home';
                for (const [id, urlPath] of Object.entries(sectionUrls)) {
                    if (path === urlPath) {
                        sectionId = id;
                        break;
                    }
                }

                if (isDocPage()) {
                    window.location.href = path;
                } else {
                    scrollToSection(sectionId);
                }

                if (navMenu && navMenu.classList.contains('active')) {
                    menuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    document.body.classList.remove('menu-open');
                }
            });
        });

        // Handle scroll events to update URL
        let lastKnownScrollPosition = 0;
        let ticking = false;

        window.addEventListener('scroll', function () {
            if (isDocPage()) return;

            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(function () {
                    updateActiveSection(lastKnownScrollPosition);
                    ticking = false;
                });
                ticking = true;
            }
        });

        function updateActiveSection(scrollPos) {
            const sections = ['home', 'about', 'projects', 'contact'];
            let activeSection = 'home';

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (!section) return;

                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    activeSection = sectionId;
                }
            });

            const currentPath = window.location.pathname;
            const targetPath = sectionUrls[activeSection] || '/';

            if (currentPath !== targetPath) {
                window.history.replaceState({}, '', targetPath);
            }
        }

        // Handle initial load
        if (!isDocPage()) {
            const currentPath = window.location.pathname;
            let sectionId = 'home';
            for (const [id, url] of Object.entries(sectionUrls)) {
                if (currentPath === url) {
                    sectionId = id;
                    break;
                }
            }

            setTimeout(() => scrollToSection(sectionId, 'instant'), 10);
        }

        // Handle browser back/forward
        window.addEventListener('popstate', function () {
            if (isDocPage()) return;

            const currentPath = window.location.pathname;
            let targetSection = 'home';
            for (const [id, url] of Object.entries(sectionUrls)) {
                if (currentPath === url) {
                    targetSection = id;
                    break;
                }
            }
            scrollToSection(targetSection);
        });
    }

    // Mobile contact actions
    function initMobileContactActions() {
        if (window.innerWidth > 576) return;

        const emailContact = document.querySelector('.contact-item[data-type="email"]');
        const phoneContact = document.querySelector('.contact-item[data-type="phone"]');

        if (emailContact) {
            emailContact.addEventListener('click', () => {
                window.location.href = 'mailto:amit00bhandari@gmail.com';
            });
        }

        if (phoneContact) {
            phoneContact.addEventListener('click', () => {
                window.location.href = 'tel:+9779820956228';
            });
        }
    }

    // Auto-hide success message
    function initAutoHideSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            if (!window.matchMedia("(max-width: 768px)").matches) {
                const confettiElements = document.querySelectorAll('.confetti');
                confettiElements.forEach(confetti => {
                    confetti.style.animationPlayState = 'running';
                });
            }

            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(-15px) scale(0.95)';
                successMessage.style.pointerEvents = 'none';

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 400);
            }, 4000);
        }
    }
    
    // Form submission handling
    function initFormSubmission() {
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                // Only prevent default if not on doc page
                const isDocPage = window.location.pathname.includes('/docs/');
                
                if (!isDocPage) {
                    // Show loading state
                    const submitBtn = this.querySelector('.submit-btn');
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.querySelector('span').textContent = 'Sending...';
                    }
                }
            });
        }
    }
});