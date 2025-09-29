import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.LUMA_API_KEY;
    if (!apiKey) {
      throw new Error("LUMA_API_KEY is not configured");
    }

    const url = new URL("https://public-api.luma.com/v1/calendar/list-events");

    const response = await fetch(url.toString(), {
      headers: {
        accept: "application/json",
        "x-luma-api-key": apiKey,
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Luma API responded with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const entries = (data?.entries ?? []) as Array<{
      api_id: string;
      event: {
        api_id: string;
        name: string;
        start_at: string;
        cover_url?: string;
        url: string;
      };
    }>;

    // Map entries to our LumaEvent shape with safe defaults for missing fields
    const now = Date.now();
    const events = entries
      .map(({ api_id, event }) => ({
        id: event.api_id || api_id,
        name: event.name,
        description: undefined,
        startAt: event.start_at,
        endAt: event.start_at,
        timezone: "UTC",
        coverImageUrl: event.cover_url,
        status: "published" as const,
        url: event.url,
        location: undefined,
      }))
      // Only upcoming events (>= now)
      .filter((e) => {
        const t = new Date(e.startAt).getTime();
        return !Number.isNaN(t) && t >= now;
      })
      // Sort ascending by start time
      .sort(
        (a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime()
      );

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching Luma events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
