
import { NextResponse } from "next/server";
import { apiGet } from "@/utils/api";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const data = await apiGet({}, `?email=${email}&password=${password}`);

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const user = data[0];

    const response = NextResponse.json({
      message: "Login successful",
      user: { id: user.id, email: user.email },
    });

    response.cookies.set("token", user.token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    });

    response.cookies.set("userId", user.id, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

     response.cookies.set("email", user.email, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

     response.cookies.set("fullName", user.fullName, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });


    return response;
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
