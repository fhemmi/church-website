import { useEffect } from 'react';

const useScrollAnimation = (selector = '.fade-in-up') => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector]);
};

export default useScrollAnimation;
