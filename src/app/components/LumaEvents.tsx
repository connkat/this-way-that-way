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
        <h2 className="heading-2 mb-6 text-center">Upcoming Events</h2>
        <div className="bg-black/20 rounded-lg p-8 space-y-4 mb-6">
          <p className="body-base text-white  text-center">Next Episode: TBA</p>
        </div>
        <div className="ml-auto max-w-xl space-y-2 text-right">
          <p className="body-base text-white leading-tight">
            Interviews will include artists, entrepreneurs, athletes,
            scientists, and more.
          </p>
          <p className="body-base text-white leading-tight">
            Each session will offer insight into the stories, challenges, and
            rewards of doing something unique.
          </p>
          <p className="body-base text-white leading-tight">
            The 60 min sessions happens monthly in 2025-2026, from Sept to June.
          </p>
          <p className="body-base text-white font-standard-bold leading-tight">
            Session attendance is limited by space to ~30 people. We&apos;d love
            to have you there.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        {/* Event Card Example */}
        {/* <div className="rounded-lg p-6 bg-white shadow-lg">
            <h3 className="font-standard-bold text-xl mb-2">
              Next Episode Recording
            </h3>
            <p className="font-standard-regular mb-4">
              Join us live for our next episode recording!
            </p>
            <p className="body-base text-white/80">
              If you can&apos;t make it, no worries. We post the best parts of
              This Way That Way online.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-standard-light">Dec 1, 2025</span>
              <a
                href="#"
                className="font-standard-bold px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: getColor("blue") }}
              >
                Register
              </a>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
