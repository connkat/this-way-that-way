"use client";

import { useScrollColor } from "@/hooks/useScrollColor";
import { getColor } from "@/styles/colors";

export default function EmailSignup() {
  const backgroundColor = useScrollColor(
    "email-section",
    "black",
    getColor("pastelYellow")
  );
  return (
    <section
      id="email-section"
      className="w-full py-24 section-transition"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2
            className="heading-2 mb-8 text-3xl"
            style={{ color: getColor("cream") }}
          >
            Stay Updated
          </h2>
          <div className="max-w-md w-full">
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-standard-regular p-4 rounded-lg border-2 border-blue focus:outline-none focus:border-pastelCrimson w-full"
                style={{ color: getColor("cream") }}
              />
              <button
                type="submit"
                className="font-standard-bold py-4 px-6 rounded-lg w-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: getColor("blue"),
                  color: getColor("cream"),
                }}
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
