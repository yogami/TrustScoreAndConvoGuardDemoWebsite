import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const apiUrl = process.env.NEXT_PUBLIC_CONVOGUARD_API_URL;
    if (!apiUrl) {
        return NextResponse.json({ error: 'API URL not configured' }, { status: 500 });
    }

    try {
        const body = await req.json();
        const response = await fetch(`${apiUrl}/api/validate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        return NextResponse.json({ error: 'Proxy Error', details: String(error) }, { status: 500 });
    }
}
