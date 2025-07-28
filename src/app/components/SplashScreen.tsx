"use client";

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isClickable, setIsClickable] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Make clickable after a short delay to prevent accidental clicks
    const timer = setTimeout(() => {
      setIsClickable(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isClickable) return;
    setIsAnimating(false);
    setTimeout(() => {
      onComplete();
    }, 500); // Give time for exit animation
  };

  if (!isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex">
        {isClickable && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <p className="text-white text-xl opacity-50">Click anywhere to continue</p>
          </div>
        )}
        {/* Left side */}
        <div className={`w-1/2 bg-black transform origin-bottom-right transition-transform duration-1000 ${isAnimating ? "scale-100" : "scale-0"}`}>
          <div className="h-full flex items-center justify-center">
            <h1 className="heading-1 text-white transform -rotate-45">this way</h1>
          </div>
        </div>
        {/* Right side */}
        <div className={`w-1/2 bg-black transform origin-top-left transition-transform duration-1000 ${isAnimating ? "scale-100" : "scale-0"}`}>
          <div className="h-full flex items-center justify-center">
            <h1 className="heading-1 text-white transform -rotate-45">that way</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
