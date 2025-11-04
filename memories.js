// Smooth scrolling and animations for memories page
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });

    // Observe memory cards
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe letter cards
    const letterCards = document.querySelectorAll('.letter-card');
    letterCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) rotate(0deg)';
        card.style.transition = 'all 0.8s ease';
        card.style.transitionDelay = `${index * 0.3}s`;
        observer.observe(card);
    });
});

// Add animate class styles
const style = document.createElement('style');
style.textContent = `
    .timeline-item.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .memory-card.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .letter-card.animate {
        opacity: 1 !important;
        transform: translateY(0) rotate(-1deg) !important;
    }
    
    .letter-card:nth-child(even).animate {
        transform: translateY(0) rotate(1deg) !important;
    }
`;
document.head.appendChild(style);

// Navigation to future page
function goToFuture() {
    // Add transition effect
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'future.html';
    }, 500);
}

// Parallax effect for floating photos
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingPhotos = document.querySelectorAll('.floating-photo');
    
    floatingPhotos.forEach((photo, index) => {
        const speed = 0.5 + (index * 0.1);
        photo.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add click effects to memory cards
document.addEventListener('DOMContentLoaded', function() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create a heart animation
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'heartFloat 2s ease-out forwards';
            
            const rect = this.getBoundingClientRect();
            heart.style.left = (rect.left + rect.width / 2) + 'px';
            heart.style.top = (rect.top + rect.height / 2) + 'px';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        });
    });
});

// Add heart float animation
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes heartFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Add typing effect to timeline content
function addTypingEffect() {
    const timelineContents = document.querySelectorAll('.timeline-content p:last-child');
    
    timelineContents.forEach((content, index) => {
        const originalText = content.textContent;
        content.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    content.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 1000);
    });
}

// Initialize typing effect when timeline is visible
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(addTypingEffect, 1000);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timelineObserver.observe(timeline);
    }
});

// Add hover sound effect (optional - requires audio files)
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.memory-card, .letter-card, .timeline-content');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.02)', '');
        });
    });
}

document.addEventListener('DOMContentLoaded', addHoverEffects);

// Navigate to future page
function goToFuture() {
    // Add transition effect
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'future.html';
    }, 500);
}

// Open wish jar function
function openWish(element, wishNumber) {
    const jarContainer = element.querySelector('.jar-container');
    const wishContent = element.querySelector('.wish-content');
    
    if (element.classList.contains('opened')) return;
    
    // Add opened class
    element.classList.add('opened');
    
    // Animate jar opening
    jarContainer.style.transform = 'scale(0.8)';
    jarContainer.style.opacity = '0.3';
    
    // Show wish content
    setTimeout(() => {
        wishContent.classList.remove('hidden');
        wishContent.style.animation = 'wishReveal 0.8s ease-out forwards';
        
        // Create sparkle effect
        createWishSparkles(element);
    }, 300);
}

// Create sparkle effect for wish jars
function createWishSparkles(element) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '1rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.animation = `sparkleWish ${Math.random() * 2 + 1}s ease-out forwards`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
}

// Flip trivia card function
function flipCard(element) {
    element.classList.toggle('flipped');
}