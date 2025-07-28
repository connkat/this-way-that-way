import { useEffect, useState } from "react";

export const useScrollColor = (
  sectionId: string,
  initialColor: string,
  finalColor: string
) => {
  const [backgroundColor, setBackgroundColor] = useState("black");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor(finalColor);
          } else {
            setBackgroundColor("black");
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, finalColor]);

  return backgroundColor;
};
