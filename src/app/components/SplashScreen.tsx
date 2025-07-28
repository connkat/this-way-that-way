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
              className="font-standard-bold text-[5rem] leading-tight transition-colors duration-300 slide-in-from-below"
              style={{ color: getColor("cream") }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = getColor("blue"))
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = getColor("cream"))
              }
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
              className="font-standard-bold text-[5rem] leading-tight transition-colors duration-300 slide-in-from-above"
              style={{ color: getColor("cream") }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = getColor("blue"))
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = getColor("cream"))
              }
            >
              that way
            </h1>
          </div>
        </div>
      </div>
      {isClickable && (
        <div className="absolute bottom-20 inset-x-0 z-10 flex items-center justify-center">
          <p
            className="text-xl opacity-0 animate-fade-in-click transition-colors duration-200"
            style={{ color: getColor("cream") }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = getColor("blue"))
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = getColor("cream"))
            }
          >
            (Click to go your own way)
          </p>
        </div>
      )}
    </div>
  );
}
