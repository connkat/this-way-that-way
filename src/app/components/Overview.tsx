"use client";

import Image from "next/image";
import { getColor } from "@/styles/colors";
import { useScrollColor } from "@/hooks/useScrollColor";
import PodcastRecording2 from "@/assets/podcast-recording2.jpg";
import { useScreenSize } from "@/hooks/useScreenSize";

interface OverviewProps {
  showContent: boolean;
}

export default function Overview({ showContent }: OverviewProps) {
  const backgroundColor = useScrollColor("overview-section", "black", "black");
  const { isMobile, isTablet } = useScreenSize();
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
          className={`font-standard-bold ${
            isMobile ? "text-4xl" : isTablet ? "text-6xl" : "text-[5rem]"
          } leading-tight mb-6 text-center ${
            showContent ? "animate-fade-in-1" : ""
          }`}
          style={{ color: getColor("pastelYellow") }}
        >
          A monthly interview series
          <br />
          <span
            className={`font-standard-bold ${
              isMobile ? "text-3xl" : isTablet ? "text-5xl" : "text-[5rem]"
            } ${showContent ? "animate-fade-in-2" : ""}`}
            style={{ color: getColor("pastelOrange") }}
          >
            about taking a distinctive path
          </span>
          <br />
          <span
            className={`font-standard-bold ${
              isMobile ? "text-3xl" : isTablet ? "text-5xl" : "text-[5rem]"
            } ${showContent ? "animate-fade-in-3" : ""}`}
            style={{ color: getColor("pastelCrimson") }}
          >
            in career and life.
          </span>
        </h1>
        <div
          className={`flex ${isMobile ? "flex-col" : "flex-row"} ${
            isMobile ? "gap-4" : "gap-6"
          } mt-8 ${showContent ? "animate-fade-in-4" : ""}`}
        >
          <a
            href="#events"
            className={`${
              isMobile ? "w-full text-center" : ""
            } px-8 py-3 rounded-lg font-standard-bold transition-transform hover:scale-105`}
            style={{
              backgroundColor: getColor("pastelYellow"),
              color: "black",
            }}
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
            className={`${
              isMobile ? "w-full text-center" : ""
            } px-8 py-3 rounded-lg font-standard-bold transition-transform hover:scale-105`}
            style={{
              backgroundColor: getColor("blue"),
              color: getColor("cream"),
            }}
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
