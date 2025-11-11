// import { NextResponse } from 'next/server';

// export async function GET(req: Request) {
//   // Example: Fetch user data or pass the data from the query (e.g., fullName)
//   const { fullName } = await req.json(); // You can get this from the request body or query params
  
//   // Set the cookie
//   const response = NextResponse.json({ message: "Cookie set successfully" });
//     console.log(fullName,"fullName@");
    
//   // Set the cookie with fullName (no expiration set, so it's persistent)
//   response.cookies.set('fullName', fullName);

//   return response;
// }


import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { fullName } = await req.json();  // Get fullName from the request body

  // Set the cookie with fullName
  const response = NextResponse.json({ message: "Cookie set successfully" });

  // Set the cookie with fullName (no expiration set, so it's persistent)
  response.cookies.set('fullName', fullName, {
    path: '/',
    httpOnly: true,  // Cookie is not accessible via JavaScript
  });

  return response;
}
