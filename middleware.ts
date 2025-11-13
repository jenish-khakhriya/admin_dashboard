import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apiGet, checkAuth } from "./utils/api";
import { ROUTES } from "./constant/route";

const protectedRoutes = [ROUTES.DASHBOARD];
const authRoutes = [ROUTES.LOGIN, ROUTES.DASHBOARD];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const id = req.cookies.get("userId")?.value;
  const token = req.cookies.get("token")?.value;

  const isAuthenticated = await checkAuth(token || '', id || '');

 
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
    }
    return NextResponse.next();
  }

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (isAuthenticated) {
      return redirectToLogin(req);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

function redirectToLogin(req: NextRequest) {
  const response = NextResponse.redirect(new URL(ROUTES.LOGIN, req.url));
  
  response.cookies.delete('token');
  response.cookies.delete('userId');
  response.cookies.delete('email');
  response.cookies.delete('fullName');
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};