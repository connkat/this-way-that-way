"use client";

import Image from "next/image";
import { getColor } from "@/styles/colors";
import { useScrollColor } from "@/hooks/useScrollColor";
import BackyardImage from "@/assets/house-backyard-people2.jpg";

export default function About() {
  const backgroundColor = useScrollColor(
    "about-section",
    "black",
    getColor("pastelOrange")
  );
  return (
    <section
      id="about-section"
      className="relative w-full py-24 section-transition"
      style={{ backgroundColor }}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={BackyardImage}
          alt="House backyard with people"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        <div
          className="absolute inset-0 section-transition mix-blend-soft-light"
          style={{ backgroundColor }}
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <h2
          className="heading-2 mb-12 text-center"
          style={{ color: getColor("cream") }}
        >
          About This Way That Way
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="body-large" style={{ color: getColor("lightCream") }}>
              This Way That Way is an interview-style discussion with people
              who&#39;ve followed their unique calling to something special.
            </p>
            <p className="body-large" style={{ color: getColor("lightCream") }}>
              Interviews will include artists, entrepreneurs, athletes,
              scientists, and more.
            </p>
            <p className="body-large" style={{ color: getColor("lightCream") }}>
              Whether you&#39;re exploring your potential, navigating its
              demands, or in the blank space beyond achievement... there&#39;s
              something here for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
