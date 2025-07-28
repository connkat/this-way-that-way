import { useState, useEffect } from "react";

interface ScreenSize {
  isMobile: boolean;    // < 640px
  isTablet: boolean;    // 640px - 1024px
  isDesktop: boolean;   // > 1024px
  width: number;
  height: number;
}

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height,
      });
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
