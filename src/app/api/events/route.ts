import { NextResponse } from 'next/server';
import { LumaApiResponse } from '@/types/luma';

export async function GET() {
  try {
    const apiKey = process.env.LUMA_API_KEY;
    if (!apiKey) {
      throw new Error('LUMA_API_KEY is not configured');
    }

    const response = await fetch('https://api.lu.ma/v1/events', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Luma API responded with status: ${response.status}`);
    }

    const data: LumaApiResponse = await response.json();
    
    // Filter only published events and sort by start date
    const events = data.data
      .filter(event => event.status === 'published')
      .sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());

    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching Luma events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
