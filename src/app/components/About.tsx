"use client";

import Image from "next/image";
import { getColor } from "@/styles/colors";
import { useScrollColor } from "@/hooks/useScrollColor";
import BackyardImage from "@/assets/house-backyard-people2.jpg";

export default function About() {
  const backgroundColor = useScrollColor(
    "about-section",
    "black",
    getColor("pastelCrimson")
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
        <h2 className="heading-2 mb-12 text-center text-white">
          About The Podcast
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="body-large text-white">
              This Way That Way is an interview-style discussion with people
              who&#39;ve followed their unique calling to something special.
            </p>
            <div className="bg-white/10 rounded-lg p-6 space-y-4">
              <p className="body-base text-white">
                Whether you&apos;re exploring your own potential, navigating the
                demands of career choices, finding fulfillment, or in the blank
                space beyond achievement…. there&apos;s something here for you.
                These sessions are designed to entertain, nurture, and serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
