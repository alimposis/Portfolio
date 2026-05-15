// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl;

    if (!url.pathname.startsWith('/en')) {
        url.pathname = '/en' + url.pathname;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
