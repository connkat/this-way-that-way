"use client";

import { useEffect, useState } from "react";
import { getColor } from "@/styles/colors";

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
    }, 500);
  };

  if (!isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex">
        {/* Left side */}
        <div
          className={`w-1/2 transform origin-bottom-right transition-transform duration-1000 ${
            isAnimating ? "scale-100" : "scale-0"
          }`}
          style={{ backgroundColor: getColor("pastelCrimson") }}
        >
          <div className="h-full flex items-center justify-center">
            <h1 
              className="font-standard-bold text-[5rem] leading-tight transform -rotate-45 transition-colors duration-300"
              style={{ color: "#FFFDD0" }}
              onMouseEnter={(e) => e.currentTarget.style.color = getColor("blue")}
              onMouseLeave={(e) => e.currentTarget.style.color = "#FFFDD0"}
            >
              this way
            </h1>
          </div>
        </div>
        {/* Right side */}
        <div
          className={`w-1/2 transform origin-top-left transition-transform duration-1000 ${
            isAnimating ? "scale-100" : "scale-0"
          }`}
          style={{ backgroundColor: getColor("pastelOrange") }}
        >
          <div className="h-full flex items-center justify-center">
            <h1 
              className="font-standard-bold text-[5rem] leading-tight transform rotate-45 transition-colors duration-300"
              style={{ color: "#FFFDD0" }}
              onMouseEnter={(e) => e.currentTarget.style.color = getColor("blue")}
              onMouseLeave={(e) => e.currentTarget.style.color = "#FFFDD0"}
            >
              that way
            </h1>
          </div>
        </div>
      </div>
      {isClickable && (
        <div className="absolute bottom-20 inset-x-0 z-10 flex items-center justify-center">
          <p 
            className="text-xl opacity-75 transition-colors duration-300"
            style={{ color: "#FFFDD0" }}
            onMouseEnter={(e) => e.currentTarget.style.color = getColor("blue")}
            onMouseLeave={(e) => e.currentTarget.style.color = "#FFFDD0"}
          >
            (Click to go your own way)
          </p>
        </div>
      )}
    </div>
  );
}
