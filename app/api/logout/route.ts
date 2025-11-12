import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );

  // Delete cookies correctly
  response.cookies.set('token', '', { 
    path: '/', 
    maxAge: 0,
    expires: new Date(0)
  });
  response.cookies.set('userId', '', { 
    path: '/', 
    maxAge: 0,
    expires: new Date(0)
  });
  response.cookies.set('fullName', '', { 
    path: '/', 
    maxAge: 0,
    expires: new Date(0)
  });
  response.cookies.set('email', '', { 
    path: '/', 
    maxAge: 0,
    expires: new Date(0)
  });

  return response;
}