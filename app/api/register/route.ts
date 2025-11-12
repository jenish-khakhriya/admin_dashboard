import { NextResponse } from "next/server";
import { apiPost } from "@/utils/api"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, mobileNumber, password } = body;

    if (!fullName || !email || !mobileNumber || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const data = await apiPost(
      { fullName, email, mobileNumber, password, dataCount : 0 },
      { headers: { "Content-Type": "application/json" } },
      
    );
console.log(data,"data@");


    const response = NextResponse.json({
      message: "User registered successfully",
      user: data,
    });

    response.cookies.set("token", data?.token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
    });

    response.cookies.set("userId", data.id, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    response.cookies.set("email", data.email, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
     response.cookies.set("fullName", data.fullName, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });


    return response;
  } catch (error: any) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
