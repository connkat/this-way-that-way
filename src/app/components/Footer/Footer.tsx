"use client";

import { useScrollColor } from "@/hooks/useScrollColor";
import Location from "./Location";
import Socials from "./Socials";

export default function Footer() {
  const backgroundColor = useScrollColor("footer-section", "black", "#3F6FC4");
  return (
    <footer
      id="footer-section"
      className="w-full py-12 section-transition"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="font-standard-bold text-xl mb-4">
              This Way That Way
            </h3>
            <p className="font-fine-regular">
              A podcast about finding your path in tech.
            </p>
          </div>
          <Location />
          <Socials />
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-white/80">
          <p className="font-fine-light text-sm text-center">
            © {new Date().getFullYear()} This Way That Way. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
