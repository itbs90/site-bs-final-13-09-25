
import React, { useEffect } from 'react';

const AnimationObserver = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add different animation classes based on data attributes
            if (entry.target.getAttribute('data-animation') === 'fade') {
              entry.target.classList.add('animate-fade-in');
            } else if (entry.target.getAttribute('data-animation') === 'slide-up') {
              entry.target.classList.add('animate-slide-up');
            } else if (entry.target.getAttribute('data-animation') === 'scale') {
              entry.target.classList.add('animate-scale');
            } else {
              entry.target.classList.add('animated');
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };

    // Number counter animation
    const animateNumbers = () => {
      const countElements = document.querySelectorAll('.counter-value');
      
      countElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target') || '0');
        let count = 0;
        const duration = 2000; // milliseconds
        const step = Math.ceil(target / (duration / 16)); // 16ms is roughly 60fps
        
        const counter = setInterval(() => {
          count += step;
          if (count >= target) {
            element.textContent = target.toString();
            clearInterval(counter);
          } else {
            element.textContent = count.toString();
          }
        }, 16);
      });
    };

    // Call the functions on initial load
    setTimeout(() => {
      animateOnScroll();
      animateNumbers();
    }, 100);

    // Add event listener for any dynamically added elements
    window.addEventListener('scroll', animateOnScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return null;
};

export default AnimationObserver;
