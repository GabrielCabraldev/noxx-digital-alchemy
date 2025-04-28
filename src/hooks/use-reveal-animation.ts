
import { useEffect } from 'react';

export const useRevealAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (const element of reveals) {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to reveal elements already in viewport
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
