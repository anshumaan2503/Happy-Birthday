// Future page animations and interactions
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

    // Animate dream cards
    const dreamCards = document.querySelectorAll('.dream-card');
    dreamCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate bucket list items
    const bucketItems = document.querySelectorAll('.bucket-item');
    bucketItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Animate promise card
    const promiseCard = document.querySelector('.promise-card');
    if (promiseCard) {
        promiseCard.style.opacity = '0';
        promiseCard.style.transform = 'translateY(50px)';
        promiseCard.style.transition = 'all 0.8s ease';
        observer.observe(promiseCard);
    }
});

// Add animate class styles
const style = document.createElement('style');
style.textContent = `
    .dream-card.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .bucket-item.animate {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    .promise-card.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Make a wish functionality
function makeAWish() {
    const wishModal = document.getElementById('wishModal');
    wishModal.classList.add('show');
    
    // Add sparkle effect
    createSparkles();
}

// Blow candles functionality
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const cake = document.querySelector('.cake');
    const wishModal = document.getElementById('wishModal');
    
    // Add smooth blown out effect
    cake.classList.add('candles-out');
    
    // Add wind effect
    const windEffect = document.createElement('div');
    windEffect.innerHTML = '💨';
    windEffect.style.position = 'absolute';
    windEffect.style.fontSize = '2rem';
    windEffect.style.top = '20px';
    windEffect.style.left = '50%';
    windEffect.style.transform = 'translateX(-50%)';
    windEffect.style.animation = 'windBlow 1s ease-out forwards';
    
    const wishContent = document.querySelector('.wish-content');
    wishContent.style.position = 'relative';
    wishContent.appendChild(windEffect);
    
    // Create celebration effect with delay
    setTimeout(() => {
        createWishCelebration();
        
        // Close modal smoothly after celebration
        setTimeout(() => {
            wishModal.style.transition = 'opacity 0.5s ease';
            wishModal.style.opacity = '0';
            
            setTimeout(() => {
                wishModal.classList.remove('show');
                wishModal.style.opacity = '1';
                
                // Reset candles after modal closes
                setTimeout(() => {
                    cake.classList.remove('candles-out');
                    windEffect.remove();
                }, 300);
            }, 500);
        }, 3000);
    }, 800);
}

// Create sparkle effect
function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.position = 'fixed';
    sparkleContainer.style.top = '0';
    sparkleContainer.style.left = '0';
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    sparkleContainer.style.zIndex = '9999';
    
    document.body.appendChild(sparkleContainer);
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = `sparkleFloat ${Math.random() * 3 + 2}s ease-out forwards`;
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        sparkleContainer.appendChild(sparkle);
    }
    
    setTimeout(() => {
        sparkleContainer.remove();
    }, 5000);
}

// Create wish celebration
function createWishCelebration() {
    const celebrationDiv = document.createElement('div');
    celebrationDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    text-align: center; z-index: 10001; 
                    background: linear-gradient(135deg, rgba(255, 107, 107, 0.95), rgba(238, 90, 36, 0.95));
                    padding: 40px 60px; border-radius: 25px; 
                    box-shadow: 0 25px 50px rgba(0,0,0,0.3);
                    backdrop-filter: blur(10px);
                    animation: celebrationSlideIn 0.5s ease-out;">
            <h2 style="font-family: 'Dancing Script', cursive; font-size: 3rem; margin-bottom: 20px; 
                       color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                🎉 Wish Made! 🎉
            </h2>
            <p style="font-size: 1.2rem; color: white; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                May all your dreams come true, my love!
            </p>
        </div>
    `;
    
    document.body.appendChild(celebrationDiv);
    
    // Create floating hearts with better performance
    const heartContainer = document.createElement('div');
    heartContainer.style.position = 'fixed';
    heartContainer.style.top = '0';
    heartContainer.style.left = '0';
    heartContainer.style.width = '100%';
    heartContainer.style.height = '100%';
    heartContainer.style.pointerEvents = 'none';
    heartContainer.style.zIndex = '9999';
    
    document.body.appendChild(heartContainer);
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 1 + 1.5 + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.animation = `heartRise ${Math.random() * 2 + 3}s ease-out forwards`;
        heart.style.animationDelay = Math.random() * 1.5 + 's';
        
        heartContainer.appendChild(heart);
    }
    
    // Remove elements smoothly
    setTimeout(() => {
        celebrationDiv.style.animation = 'celebrationSlideOut 0.5s ease-in forwards';
        heartContainer.style.opacity = '0';
        heartContainer.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            celebrationDiv.remove();
            heartContainer.remove();
        }, 500);
    }, 2500);
}

// Add sparkle and heart animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 0;
            transform: translateY(0) rotate(0deg);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg);
        }
    }
    
    @keyframes heartRise {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
        }
        50% {
            opacity: 1;
            transform: translateY(-50vh) rotate(180deg) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg) scale(0.8);
        }
    }
    
    @keyframes celebrationSlideIn {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes celebrationSlideOut {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    @keyframes windBlow {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(0) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px) scale(0.8);
        }
    }
`;
document.head.appendChild(animationStyle);

// Go back to home
function goHome() {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// Interactive bucket list items
document.addEventListener('DOMContentLoaded', function() {
    const bucketItems = document.querySelectorAll('.bucket-item');
    
    bucketItems.forEach(item => {
        const checkbox = item.querySelector('.bucket-checkbox');
        
        checkbox.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle completed state
            item.classList.toggle('completed');
            
            if (item.classList.contains('completed')) {
                checkbox.innerHTML = '<i class="fas fa-check"></i>';
                item.style.opacity = '0.7';
                
                // Create completion effect
                const completionEffect = document.createElement('div');
                completionEffect.innerHTML = '🎉';
                completionEffect.style.position = 'absolute';
                completionEffect.style.right = '20px';
                completionEffect.style.top = '50%';
                completionEffect.style.transform = 'translateY(-50%)';
                completionEffect.style.fontSize = '2rem';
                completionEffect.style.animation = 'bounce 0.5s ease';
                
                item.style.position = 'relative';
                item.appendChild(completionEffect);
                
                setTimeout(() => {
                    completionEffect.remove();
                }, 1000);
            } else {
                checkbox.innerHTML = '<i class="fas fa-heart"></i>';
                item.style.opacity = '1';
            }
        });
    });
});

// Dream card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const dreamCards = document.querySelectorAll('.dream-card');
    
    dreamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create floating dream effect
            const dreamSymbol = document.createElement('div');
            dreamSymbol.innerHTML = '💭';
            dreamSymbol.style.position = 'absolute';
            dreamSymbol.style.top = '10px';
            dreamSymbol.style.right = '10px';
            dreamSymbol.style.fontSize = '1.5rem';
            dreamSymbol.style.animation = 'dreamFloat 2s ease-in-out infinite';
            
            this.style.position = 'relative';
            this.appendChild(dreamSymbol);
            
            setTimeout(() => {
                if (dreamSymbol.parentNode) {
                    dreamSymbol.remove();
                }
            }, 2000);
        });
    });
});

// Parallax effect for dream bubbles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const dreamBubbles = document.querySelectorAll('.dream-bubble');
    
    dreamBubbles.forEach((bubble, index) => {
        const speed = 0.3 + (index * 0.1);
        bubble.style.transform = `translateY(${scrolled * speed}px) scale(${1 + scrolled * 0.0001})`;
    });
});

// Add click effect to final buttons
document.addEventListener('DOMContentLoaded', function() {
    const finalButtons = document.querySelectorAll('.final-btn');
    
    finalButtons.forEach(button => {
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

// Close wish modal on outside click
document.addEventListener('DOMContentLoaded', function() {
    const wishModal = document.getElementById('wishModal');
    
    wishModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    });
});

// Accept challenge function
function acceptChallenge(element, challengeNumber) {
    console.log('Challenge clicked!', challengeNumber); // Debug log
    
    if (element.classList.contains('accepted')) {
        console.log('Already accepted');
        return;
    }
    
    element.classList.add('accepted');
    const statusElement = element.querySelector('.challenge-status');
    
    if (statusElement) {
        statusElement.textContent = 'Challenge Accepted! 🎉';
        statusElement.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    }
    
    // Create celebration effect
    createChallengeConfetti(element);
    
    // Add glow effect
    element.style.boxShadow = '0 0 30px rgba(76, 175, 80, 0.6)';
    
    setTimeout(() => {
        element.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
    }, 2000);
}

// Create confetti for challenge acceptance
function createChallengeConfetti(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🎉', '⭐', '✨', '🌟'][Math.floor(Math.random() * 4)];
        confetti.style.position = 'fixed';
        confetti.style.left = (rect.left + rect.width / 2) + 'px';
        confetti.style.top = (rect.top + rect.height / 2) + 'px';
        confetti.style.fontSize = '1.5rem';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        
        const angle = (Math.random() * 360) * Math.PI / 180;
        const velocity = Math.random() * 100 + 50;
        
        confetti.style.animation = `challengeConfetti 2s ease-out forwards`;
        confetti.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
        confetti.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}