import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apiGet, checkAuth } from "./utils/api";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const id = req.cookies.get("userId")?.value;
  const token = req.cookies.get("token")?.value;

  const isAuthenticated = await checkAuth(token || '', id || '');

  // 🔹 Handle auth routes (login, register) - redirect to dashboard if already authenticated
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    // If not authenticated, allow access to login/register
    return NextResponse.next();
  }

  // 🔹 Handle protected routes - redirect to login if not authenticated
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (isAuthenticated) {
      return redirectToLogin(req);
    }
    // If authenticated, allow access to protected routes
    return NextResponse.next();
  }

  // 🔹 For all other routes, continue
  return NextResponse.next();
}

// 🔹 Helper function to redirect to login and clear cookies
function redirectToLogin(req: NextRequest) {
  const response = NextResponse.redirect(new URL('/login', req.url));
  
  // Clear all auth cookies
  response.cookies.delete('token');
  response.cookies.delete('userId');
  response.cookies.delete('email');
  
  return response;
}

// 🔹 Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};