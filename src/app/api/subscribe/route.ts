import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const FORM_ID = process.env.GOOGLE_FORM_ID || process.env.NEXT_PUBLIC_GOOGLE_FORM_ID;
    const EMAIL_ENTRY = process.env.GOOGLE_FORM_EMAIL_ENTRY || process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ENTRY;

    if (!FORM_ID || !EMAIL_ENTRY) {
      return NextResponse.json(
        { error: 'Form configuration missing. Set GOOGLE_FORM_ID and GOOGLE_FORM_EMAIL_ENTRY in env.' },
        { status: 500 }
      );
    }

    const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
    const body = new URLSearchParams({ [EMAIL_ENTRY]: email });

    const res = await fetch(formUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      redirect: 'follow',
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return NextResponse.json(
        { error: 'Form submission failed', status: res.status, details: text?.slice(0, 500) },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error proxying to Google Forms:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
