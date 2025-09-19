"use client";

import { useScrollColor } from "@/hooks/useScrollColor";
import { getColor } from "@/styles/colors";
import { useState, FormEvent } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const backgroundColor = useScrollColor(
    "email-section",
    "black",
    getColor("pastelYellow")
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to subscribe");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to subscribe");
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="font-standard-regular p-4 rounded-lg border-2 border-blue focus:outline-none focus:border-pastelCrimson w-full"
                style={{ color: getColor("cream") }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="font-standard-bold py-4 px-6 rounded-lg w-full transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: getColor("blue"),
                  color: getColor("cream"),
                }}
              >
                {status === "loading" ? "Subscribing..." : "Email Signup"}
              </button>
              {status === "success" && (
                <p className="text-green-500 text-center mt-2">
                  Successfully subscribed!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-2">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
