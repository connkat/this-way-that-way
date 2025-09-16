"use client";

import { useScrollColor } from "@/hooks/useScrollColor";
import { getColor } from "@/styles/colors";
import { useScreenSize } from "@/hooks/useScreenSize";
import Location from "./Location";
import Socials from "./Socials";

export default function Footer() {
  const { isMobile } = useScreenSize();
  const backgroundColor = useScrollColor(
    "footer-section",
    "black",
    getColor("blue")
  );
  return (
    <footer
      id="footer-section"
      className={`w-full ${isMobile ? "py-6" : "py-8"} section-transition`}
      style={{ backgroundColor }}
    >
      <div className={`max-w-6xl mx-auto ${isMobile ? "px-6" : "px-8"}`}>
        {isMobile ? (
          <div
            className="flex justify-between items-start"
            style={{ color: getColor("lightCream") }}
          >
            <Location />
            <Socials />
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
            style={{ color: getColor("cream") }}
          >
            <Location />
            <div className="text-center md:text-left" />

            <div className="flex justify-center md:justify-end">
              <Socials />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
