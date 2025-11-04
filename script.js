// Faster Loading Screen Animation
window.addEventListener('DOMContentLoaded', function() {
    // Reduce loading time for mobile
    const isMobile = window.innerWidth <= 768;
    const loadingTime = isMobile ? 1000 : 1500;
    
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('show');
        }, 300);
    }, loadingTime);
});

// Smooth Scrolling Function
function scrollToNext() {
    const loveMessageSection = document.querySelector('.love-message-section');
    loveMessageSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Intersection Observer for Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const messageCard = document.querySelector('.message-card');
    const photoCards = document.querySelectorAll('.photo-card');
    const wishCards = document.querySelectorAll('.wish-card');
    
    if (messageCard) observer.observe(messageCard);
    photoCards.forEach(card => observer.observe(card));
    wishCards.forEach(card => observer.observe(card));
});

// Celebration Function
function startCelebration() {
    const celebrationOverlay = document.getElementById('celebrationOverlay');
    celebrationOverlay.classList.add('show');
    
    // Create multiple confetti elements
    createConfetti();
    
    // Play celebration sound (if you want to add audio)
    // const audio = new Audio('celebration.mp3');
    // audio.play();
    
    // Auto redirect after 5 seconds
    setTimeout(() => {
        celebrationOverlay.classList.remove('show');
        
        // Wait for fade out animation then redirect
        setTimeout(() => {
            // Add transition effect
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = 'memories.html';
            }, 500);
        }, 500);
    }, 5000);
    
    // Allow manual close on click (but still redirect)
    celebrationOverlay.addEventListener('click', () => {
        celebrationOverlay.classList.remove('show');
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = 'memories.html';
            }, 500);
        }, 500);
    });
}

// Show navigation hint (no longer needed since auto-redirect)
function showNavigationHint() {
    // This function is kept for compatibility but no longer used
    // since we auto-redirect to memories page
}

// Navigate to memories page
function goToMemories() {
    // Add transition effect
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'memories.html';
    }, 500);
}

// Create Beautiful Confetti Rain
function createConfetti() {
    const confettiContainer = document.getElementById('confettiRain');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const shapes = ['🎊', '🎉', '✨', '⭐', '💫', '🌟'];
    
    // Clear existing confetti
    confettiContainer.innerHTML = '';
    
    // Create falling confetti (more for longer celebration)
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        const isEmoji = Math.random() > 0.6;
        
        if (isEmoji) {
            confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.fontSize = Math.random() * 10 + 15 + 'px';
        } else {
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
        }
        
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 4}s linear infinite`;
        confetti.style.animationDelay = Math.random() * 5 + 's';
        
        confettiContainer.appendChild(confetti);
    }
    
    // Create magical sparkle effect
    createSparkleEffect();
}

// Create sparkle effect around the card
function createSparkleEffect() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-effect';
    sparkleContainer.style.position = 'absolute';
    sparkleContainer.style.top = '0';
    sparkleContainer.style.left = '0';
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    sparkleContainer.style.zIndex = '6';
    
    document.querySelector('.celebration-overlay').appendChild(sparkleContainer);
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 15 + 10 + 'px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = `sparkleGlow ${Math.random() * 2 + 2}s ease-in-out infinite`;
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        sparkleContainer.appendChild(sparkle);
    }
    
    setTimeout(() => {
        sparkleContainer.remove();
    }, 6000);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const floatingHearts = document.querySelector('.floating-hearts');
    
    if (heroSection && floatingHearts) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        floatingHearts.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effects to photo cards
document.addEventListener('DOMContentLoaded', function() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect to love message
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

// Initialize typing effect when message card is visible
const messageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const loveNote = entry.target.querySelector('.love-note');
            const originalText = loveNote.textContent;
            
            setTimeout(() => {
                typeWriter(loveNote, originalText, 30);
            }, 500);
            
            messageObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const messageCard = document.querySelector('.message-card');
    if (messageCard) {
        messageObserver.observe(messageCard);
    }
});

// Add floating animation to wish cards
document.addEventListener('DOMContentLoaded', function() {
    const wishCards = document.querySelectorAll('.wish-card');
    
    wishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('float-in');
    });
});

// Add CSS for float-in animation
const style = document.createElement('style');
style.textContent = `
    .float-in {
        animation: floatIn 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes floatIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add click effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);