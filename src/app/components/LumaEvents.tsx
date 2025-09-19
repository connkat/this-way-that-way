"use client";

import { useEffect, useState } from "react";
import { useScrollColor } from "@/hooks/useScrollColor";
import { getColor } from "@/styles/colors";
import { LumaEvent } from "@/types/luma";
import { format } from "date-fns";

export default function LumaEvents() {
  const [events, setEvents] = useState<LumaEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const backgroundColor = useScrollColor(
    "events-section",
    "black",
    getColor("pastelCrimson")
  );

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

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
        <div className="bg-black/20 rounded-lg p-8 space-y-6">
          {loading ? (
            <p className="body-base text-center" style={{ color: getColor("cream") }}>
              Loading events...
            </p>
          ) : error ? (
            <p className="body-base text-center" style={{ color: getColor("cream") }}>
              {error}
            </p>
          ) : events.length === 0 ? (
            <p className="body-base text-center" style={{ color: getColor("cream") }}>
              Next This Way That Way: TBA
            </p>
          ) : (
            <div className="space-y-8">
              {events.map((event) => (
                <div key={event.id} className="space-y-4">
                  {event.coverImageUrl && (
                    <img
                      src={event.coverImageUrl}
                      alt={event.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <h3
                      className="text-xl font-standard-bold mb-2"
                      style={{ color: getColor("cream") }}
                    >
                      {event.name}
                    </h3>
                    <p
                      className="body-base mb-4"
                      style={{ color: getColor("lightCream") }}
                    >
                      {format(new Date(event.startAt), 'MMMM d, yyyy h:mm a')}
                    </p>
                    {event.description && (
                      <p
                        className="body-base mb-4"
                        style={{ color: getColor("lightCream") }}
                      >
                        {event.description}
                      </p>
                    )}
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded-lg font-standard-bold transition-colors duration-200"
                      style={{
                        backgroundColor: getColor("blue"),
                        color: getColor("cream"),
                      }}
                    >
                      Register
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
