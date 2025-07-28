"use client";

import Image from "next/image";
import { getColor } from "@/styles/colors";
import { useScrollColor } from "@/hooks/useScrollColor";
import PodcastRecording2 from "@/assets/podcast-recording2.jpg";

export default function Overview() {
  const backgroundColor = useScrollColor("overview-section", "black", "black");
  return (
    <section
      id="overview-section"
      className="relative w-full min-h-screen overflow-hidden section-transition"
      style={{ backgroundColor }}
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={PodcastRecording2}
          alt="Podcast recording setup"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4">
        <h1
          className="font-standard-bold text-[5rem] leading-tight mb-6 text-center animate-fade-in-1"
          style={{ color: getColor("pastelYellow") }}
        >
          A monthly interview series
          <br />
          <span
            className="font-standard-bold animate-fade-in-2"
            style={{ color: getColor("pastelOrange") }}
          >
            about taking a distinctive path
          </span>
          <br />
          <span
            className="font-standard-bold animate-fade-in-3"
            style={{ color: getColor("pastelCrimson") }}
          >
            in career and life.
          </span>
        </h1>
        <div className="flex gap-6 mt-8 animate-fade-in-4">
          <a
            href="#events"
            className="px-8 py-3 rounded-lg font-fine-bold text-black transition-transform hover:scale-105"
            style={{ backgroundColor: getColor("pastelYellow") }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("events-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Events
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg font-fine-bold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: getColor("blue") }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
