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
            Next Episode: TBA
          </p>
        </div>
        <div className="ml-auto max-w-xl space-y-2 text-right">
          <p
            className="body-base leading-tight"
            style={{ color: getColor("lightCream") }}
          >
            Interviews will include artists, entrepreneurs, athletes,
            scientists, and more.
          </p>
          <p
            className="body-base leading-tight"
            style={{ color: getColor("lightCream") }}
          >
            Each episode will focus on a unique path through tech.
          </p>
          <p
            className="body-base leading-tight"
            style={{ color: getColor("lightCream") }}
          >
            Guests will share their stories, insights, and advice.
          </p>
          <p
            className="body-base font-standard-bold leading-tight"
            style={{ color: getColor("lightCream") }}
          >
            Coming soon to a platform near you.
          </p>
        </div>
      </div>
    </section>
  );
}
