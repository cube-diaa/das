import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {redirect} from "next/navigation";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname)
    // if (request.nextUrl.pathname === "/") {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }
    return NextResponse.next()
}