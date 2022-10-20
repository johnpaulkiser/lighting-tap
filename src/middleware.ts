import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname == "/") {
    return NextResponse.rewrite(new URL("/wallet", request.url));
  }
}
