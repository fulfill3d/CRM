import { NextRequest, NextResponse } from 'next/server';

type ProxyRequestBody = {
    url: string;
    method: string;
    body?: any;
    headers?: { [key: string]: string };
};

export async function POST(req: NextRequest) {
    try {
        const { url, method, body, headers }: ProxyRequestBody = await req.json();

        const response = await fetch(url, {
            method,
            headers: {
                ...headers,
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        });

        const contentType = response.headers.get('Content-Type');
        let data;

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = null;
        }

        if (response.ok) {
            return NextResponse.json(data, { status: 200 });
        } else {
            const errorMessage = data?.message || `Request failed with status ${response.status}`;
            return NextResponse.json({ message: errorMessage }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}
