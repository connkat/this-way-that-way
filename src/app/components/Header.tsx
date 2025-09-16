import { useEffect, useRef, useState } from "react";
import { getColor } from "@/styles/colors";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useScreenSize();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1);
      },
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );

    observer.observe(header);
    return () => observer.unobserve(header);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: `${getColor("blue")}${isSticky ? "ee" : ""}`,
      }}
    >
      <div className={`max-w-6xl mx-auto ${isMobile ? "px-6" : "px-8"}`}>
        <div className="flex items-center justify-between py-4">
          <h1
            className="font-standard-bold text-xl"
            style={{ color: getColor("cream") }}
          >
            This Way That Way
          </h1>
          <button
            className="relative z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: getColor("lightCream") }}
            />
            <span
              className={`w-6 h-0.5 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundColor: getColor("lightCream") }}
            />
            <span
              className={`w-6 h-0.5 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: getColor("lightCream") }}
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 z-40 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: `${getColor("blue")}cc` }} // cc = 80% opacity
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <button
            className="w-full py-2 text-lg font-standard-bold transition-colors duration-200 hover:opacity-80"
            style={{ color: getColor("lightCream") }}
            onClick={() => scrollToSection("email-section-1")}
          >
            Sign Up
          </button>
          <button
            className="w-full py-2 text-lg font-standard-bold transition-colors duration-200 hover:opacity-80"
            style={{ color: getColor("lightCream") }}
            onClick={() => scrollToSection("about-section")}
          >
            About
          </button>
        </div>
      </div>
    </header>
  );
}
