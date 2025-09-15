"use client";

import { useEffect, useState } from "react";
import { getColor } from "@/styles/colors";
import { useScreenSize } from "@/hooks/useScreenSize";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isClickable, setIsClickable] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClickable(true);
    }, 500);

    const handleScroll = (event: WheelEvent) => {
      if (!isClickable) return;
      if (event.deltaY > 0) { // Scrolling down
        setIsAnimating(false);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isClickable, onComplete]);

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
      style={{ background: `linear-gradient(135deg, ${getColor("pastelCrimson")}, ${getColor("pastelYellow")}, ${getColor("pastelOrange")})` }}
    >
      <div
        className={`absolute inset-0 ${isMobile ? "flex-col" : "flex"} flex`}
      >
        {/* Left side */}
        <div
          className={`${
            isMobile
              ? "h-1/2 w-full origin-bottom"
              : "w-1/2 origin-bottom-right"
          } transform transition-transform duration-1000 ${
            isAnimating ? "scale-100" : "scale-0"
          }`}
          style={{ backgroundColor: 'transparent' }}
        >
          <div className="h-full flex items-center justify-center">
            <h1
              className={`font-standard-bold ${
                isMobile ? "text-4xl" : "text-[5rem]"
              } leading-tight transition-colors duration-300 ${
                isMobile ? "slide-in-from-left" : "slide-in-from-below"
              }`}
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
          className={`${
            isMobile ? "h-1/2 w-full origin-top" : "w-1/2 origin-top-left"
          } transform transition-transform duration-1000 ${
            isAnimating ? "scale-100" : "scale-0"
          }`}
          style={{ backgroundColor: 'transparent' }}
        >
          <div className="h-full flex items-center justify-center">
            <h1
              className={`font-standard-bold ${
                isMobile ? "text-4xl" : "text-[5rem]"
              } leading-tight transition-colors duration-300 ${
                isMobile ? "slide-in-from-right" : "slide-in-from-above"
              }`}
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
        <div
          className={`absolute ${
            isMobile ? "bottom-10" : "bottom-20"
          } inset-x-0 z-10 flex items-center justify-center`}
        >
          <p
            className={`${
              isMobile ? "text-base" : "text-xl"
            } opacity-0 animate-fade-in-click transition-colors duration-200`}
            style={{ color: getColor("cream") }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = getColor("blue"))
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = getColor("cream"))
            }
          >
            <MdOutlineKeyboardDoubleArrowDown style={{ fontSize: '4rem' }} />
          </p>
        </div>
      )}
    </div>
  );
}
