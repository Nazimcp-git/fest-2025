// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Initial confetti animation
  setTimeout(createConfetti, 500);
  
  // Celebrate button
  const celebrateBtn = document.getElementById('celebrate-btn');
  celebrateBtn.addEventListener('click', createConfetti);
  
  // Scroll animations
  setupScrollAnimations();
  
  // Countdown timer
  setupCountdown();
  
  // Slider functionality
  setupSlider();
  
  // Mouse dot effect
  setupMouseDot();
});

function createConfetti() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
  
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  
  // Create confetti from left side
  for (let i = 0; i < 50; i++) {
    createConfettiPiece(colors, container, 'left');
  }
  
  // Create confetti from right side
  for (let i = 0; i < 50; i++) {
    createConfettiPiece(colors, container, 'right');
  }
  
  // Remove confetti after animation
  setTimeout(() => {
    container.innerHTML = '';
  }, 3000);
}

function createConfettiPiece(colors, container, side) {
  const confetti = document.createElement('div');
  confetti.className = `confetti ${side}`;
  
  // Random properties
  const size = Math.random() * 12 + 8;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const animationDuration = Math.random() * 2 + 1;
  const delay = Math.random() * 1;
  
  // Apply styles
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;
  confetti.style.backgroundColor = color;
  confetti.style.animationDuration = `${animationDuration}s`;
  confetti.style.animationDelay = `${delay}s`;
  
  // Random shape
  if (Math.random() > 0.5) {
    confetti.style.borderRadius = '50%';
  } else {
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  }
  
  // Random position for left/right
  if (side === 'left') {
    confetti.style.left = `${Math.random() * 20}px`;
    confetti.style.top = `${Math.random() * 100 - 20}px`;
  } else {
    confetti.style.right = `${Math.random() * 20}px`;
    confetti.style.top = `${Math.random() * 100 - 20}px`;
  }
  
  container.appendChild(confetti);
}

function setupScrollAnimations() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate progress bars
        if (entry.target.classList.contains('progress-card')) {
          const progressBar = entry.target.querySelector('.progress-bar');
          const width = progressBar.style.width;
          progressBar.style.width = '0';
          setTimeout(() => {
            progressBar.style.width = width;
          }, 100);
        }
      }
    });
  }, {
    threshold: 0.1
  });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
}

function setupCountdown() {
  // Set to August 15, 2025
  const countdownDate = new Date('September 15, 2025 00:00:00').getTime();
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display results
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // If countdown is finished
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector('.countdown-container').innerHTML = '<h3>Event Started!</h3>';
    }
  };
  
  // Update immediately and then every second
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

function setupSlider() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.slider-dots');
  
  let currentIndex = 0;
  let slideInterval;
  
  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.slider-dot');
  
  // Update slider position
  const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };
  
  // Go to specific slide
  const goToSlide = (index) => {
    currentIndex = index;
    updateSlider();
    resetInterval();
  };
  
  // Next slide
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetInterval();
  };
  
  // Previous slide
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetInterval();
  };
  
  // Auto slide
  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };
  
  // Reset interval
  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };
  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Start auto sliding
  startInterval();
  
  // Pause on hover
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slider.addEventListener('mouseleave', startInterval);
}

function setupMouseDot() {
  const mouseDot = document.querySelector('.mouse-dot');
  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let scale = 1;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  document.addEventListener('mousedown', () => {
    mouseDot.classList.add('active');
  });
  
  document.addEventListener('mouseup', () => {
    mouseDot.classList.remove('active');
  });
  
  function animateDot() {
    // Ease factor (0.1 = smoother/slower)
    dotX += (mouseX - dotX) * 0.1;
    dotY += (mouseY - dotY) * 0.1;
    
    // Apply transform with scale
    mouseDot.style.transform = `translate(${dotX}px, ${dotY}px) scale(${scale})`;
    
    requestAnimationFrame(animateDot);
  }
  
  animateDot();
  
  // Scale effect on hover over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .card, .scorer-card, .slider-btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      scale = 1.5;
    });
    
    el.addEventListener('mouseleave', () => {
      scale = 1;
    });
  });
}