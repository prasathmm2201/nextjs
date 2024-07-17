import { NextResponse } from "next/server"

export function middleware(req) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('key', 'hello')
    NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })}

export const config = {
  matcher: '/api/private/:path*',
  api: {
    bodyParser: false,
  },
  runtime: "nodejs",
}