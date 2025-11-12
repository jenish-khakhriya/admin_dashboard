
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

interface CookieOptions {
  httpOnly?: boolean;
  path?: string;
  maxAge?: number;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}


export const setCookies = (
  res: NextApiResponse,
  cookies: Record<string, string>,
  options: CookieOptions = {}
) => {
  const { httpOnly = false, path = "/", maxAge, secure = false, sameSite } = options;

  const cookieStrings = Object.entries(cookies).map(([key, value]) => {
    let cookie = `${key}=${value}; Path=${path}`;
    if (httpOnly) cookie += "; HttpOnly";
    if (maxAge) cookie += `; Max-Age=${maxAge}`;
    if (secure) cookie += "; Secure";
    if (sameSite) cookie += `; SameSite=${sameSite}`;
    return cookie;
  });

  res.setHeader("Set-Cookie", cookieStrings);
};



export const getCookies = (req: NextApiRequest): Record<string, string> => {
  const cookieHeader = req.headers.cookie; // e.g., "token=abc; username=John"
  const cookies: Record<string, string> = {};

  if (!cookieHeader) return cookies;

  cookieHeader.split("; ").forEach((cookie) => {
    const [key, value] = cookie.split("=");
    cookies[key] = decodeURIComponent(value);
  });

  return cookies;
};




export const clearAllCookies = (req: NextRequest, res: NextResponse) => {
  const cookies = req?.cookies?.getAll(); 

  cookies.forEach((cookie) => {
    res?.cookies?.delete(cookie.name); 
  });
};
