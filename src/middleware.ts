import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    // Extract the token from the request
    const token = await getToken({ req: request });
    const url = request.nextUrl;

    // Check if the user is not authenticated and is trying to access protected pages
    if (!token && 
        (url.pathname.startsWith('/posts') || url.pathname.startsWith('/editor'))) 
        {
        // Redirect to the login page
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow the request to continue
    return NextResponse.next();
}

// Apply the middleware to specific routes
export const config = {
    matcher: ['/posts/:path*', '/editor/:path*']
};
