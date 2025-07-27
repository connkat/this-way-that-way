import { useEffect, useState } from 'react';

export const useScrollColor = (initialColor: string, finalColor: string) => {
  const [backgroundColor, setBackgroundColor] = useState('black');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor(finalColor);
          } else {
            setBackgroundColor('black');
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const element = document.getElementById('scroll-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [finalColor]);

  return backgroundColor;
};
