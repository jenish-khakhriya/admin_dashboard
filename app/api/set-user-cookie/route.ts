

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { fullName } = await req.json();  

  const response = NextResponse.json({ message: "Cookie set successfully" });

  response.cookies.set('fullName', fullName, {
    path: '/',
    httpOnly: true,  
  });

  return response;
}
