"use client";

import Image from "next/image";
import { getColor } from "@/styles/colors";
import { useScrollColor } from "@/hooks/useScrollColor";
import PodcastRecording from "@/assets/podcast-recording.jpg";


export default function About() {
  const backgroundColor = useScrollColor('about-section', 'black', getColor('pastelCrimson'));
  return (
    <section
      id="about-section"
      className="w-full py-24 transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="heading-2 mb-12 text-center text-white">
          About This Way That Way
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="body-large text-white">
              This Way That Way is an interview-style discussion with people
              who&#39;ve followed their unique calling to something special.
            </p>
            {/* <div className="space-y-4"> */}
						<div className="bg-white/10 rounded-lg p-6 space-y-4">

              <p className="body-base text-white">
                Whether you&apos;re exploring your own potential, navigating the
                demands of career choices, finding fulfillment, or in the blank
                space beyond achievement…. there&apos;s something here for you.
                These sessions are designed to entertain, nurture, and serve.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={PodcastRecording}
                alt="Podcast Recording Session"
                width={400}
                height={267}
                className="w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
