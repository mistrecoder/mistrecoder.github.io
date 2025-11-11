// Portfolio JavaScript - Mehdi Rejeb Kaabia

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Project data
const projectsData = [
    {
        id: 1,
        title: "Tunisie Télécom",
        category: "telecom",
        description: "Découverte et analyse des technologies ADSL, VDSL, Fibre et GSM dans le cadre d'un projet académique.",
        technologies: ["Réseaux", "Télécom", "Analyse"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1552664730-d307732884e4?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Sécurité Android",
        category: "ai",
        description: "Développement d'un système de prévention des malwares et backdoors pour applications Android.",
        technologies: ["Android", "Sécurité", "ML"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        title: "LoRaWAN Gateway",
        category: "iot",
        description: "Conception d'une passerelle LoRaWAN avec intégration MQTT pour communication IoT.",
        technologies: ["LoRaWAN", "MQTT", "IoT"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Contrôle LED + Vision",
        category: "iot",
        description: "Système de contrôle LED avec détection gestuelle basé sur STM32 et vision par ordinateur.",
        technologies: ["STM32", "Vision", "C++"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Stage Farness",
        category: "ai",
        description: "Développement d'un estimateur de pose LiDAR 6DoF avec ROS2 pour applications robotiques.",
        technologies: ["ROS2", "LiDAR", "Python"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        title: "RevBoost AI",
        category: "ai",
        description: "Plateforme prédictive hôtelière utilisant FastAPI, React et des modèles de machine learning.",
        technologies: ["FastAPI", "React", "ML"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        title: "Smart Home",
        category: "iot",
        description: "Système de maison intelligente optimisé par reinforcement learning pour HVAC et éclairage.",
        technologies: ["RL", "IoT", "Python"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        title: "Simulation IoT Contiki",
        category: "iot",
        description: "Simulation de réseaux IoT avec Contiki OS, SDN, RPL et 6LoWPAN.",
        technologies: ["Contiki OS", "SDN", "RPL"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1558346557-4ce85f10777a?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        title: "CoAP Mini-projet",
        category: "iot",
        description: "Serveur REST CoAP sur microcontrôleur pour communication légère IoT.",
        technologies: ["CoAP", "REST", "C"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        title: "RL Chess Agent",
        category: "ai",
        description: "Agent de fin de partie d'échecs utilisant Deep Q-Learning pour Roi-Dame vs Roi.",
        technologies: ["Deep Q-Learning", "Python", "RL"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1529699211952-734e67c171d8?w=400&h=300&fit=crop"
    }
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const projectsGrid = document.getElementById('projects-grid');
const projectFilters = document.querySelectorAll('.project-filter');
const contactForm = document.getElementById('contact-form');
const skillBars = document.querySelectorAll('.skill-bar');

// Mobile menu toggle
mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    });
});

// Render projects
function renderProjects(projects = projectsData) {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="${project.category}">
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110">
                <div class="absolute top-4 right-4">
                    <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        ${project.category}
                    </span>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="font-poppins font-semibold text-xl mb-3 text-gray-800">${project.title}</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-sm font-medium">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                
                <div class="flex space-x-3">
                    <a href="${project.github}" target="_blank" 
                       class="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-900 transition-all">
                        <i class="fab fa-github mr-2"></i>
                        GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" 
                       class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-all">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        Démo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animate project cards
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Project filtering
projectFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Update active filter
        projectFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        // Filter projects
        const filterValue = filter.dataset.filter;
        const filteredProjects = filterValue === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === filterValue);
        
        // Animate out current projects
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.transition = 'all 0.3s ease-out';
            card.style.opacity = '0';
            card.style.transform = 'translateY(-20px)';
        });
        
        // Render filtered projects after animation
        setTimeout(() => {
            renderProjects(filteredProjects);
        }, 300);
    });
});

// Skill bars animation
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });
}

// Contact form handling
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        showNotification('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle'
            }"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll effects
function handleScrollEffects() {
    const navbar = document.querySelector('nav');
    const scrolled = window.pageYOffset;
    
    // Navbar background opacity
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    // Active navigation link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrolled >= sectionTop && scrolled < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-blue-600');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-blue-600');
                }
            });
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render initial projects
    renderProjects();
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollEffects);
    
    // Initialize skill bars animation
    setTimeout(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }, 1000);
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Particle animation enhancement
function createFloatingParticles() {
    const heroSection = document.querySelector('.hero-gradient');
    if (!heroSection) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-white opacity-10 rounded-full pointer-events-none';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        heroSection.appendChild(particle);
    }
}

// Initialize particles after page load
window.addEventListener('load', createFloatingParticles);

// Typing effect for hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Export functions for potential external use
window.PortfolioJS = {
    renderProjects,
    showNotification,
    animateSkillBars
};