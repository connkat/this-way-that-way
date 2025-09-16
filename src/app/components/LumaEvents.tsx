"use client";

import { useScrollColor } from "@/hooks/useScrollColor";
import { getColor } from "@/styles/colors";

export default function LumaEvents() {
  const backgroundColor = useScrollColor(
    "events-section",
    "black",
    getColor("pastelCrimson")
  );
  return (
    <section
      id="events-section"
      className="w-full py-24 section-transition"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="heading-2 mb-6 text-center"
          style={{ color: getColor("cream") }}
        >
          Upcoming Events
        </h2>
        <div className="bg-black/20 rounded-lg p-8 space-y-4 mb-6">
          <p
            className="body-base text-center"
            style={{ color: getColor("cream") }}
          >
            Next This Way That Way: TBA
          </p>
        </div>
      </div>
    </section>
  );
}
