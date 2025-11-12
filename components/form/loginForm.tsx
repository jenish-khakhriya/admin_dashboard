"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../molecules/Button";
import { ROUTES } from "@/constant/route";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
      .matches(/[a-z]/, "Must contain at least 1 lowercase letter")
      .matches(/[0-9]/, "Must contain at least 1 number")
      .matches(/[!@#$%^&*(),.?\":{}|<>]/, "Must contain at least 1 special character")
      .required("Password is required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Logged in:", data);
        router.push("/dashboard");
      } else {
        setIsUserFound(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-red-500 text-center h-5">
        {isUserFound && "User Not Found!"}
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 w-full rounded active:border-black active:border-[2px] active:outline-none outline-none border-black border-[2px] bg-transparent"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="p-2 w-full rounded active:border-black active:border-[2px] active:outline-none outline-none border-black border-[2px] bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[50%] translate-y-[-50%] right-[10px] text-gray-500 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              isLoading={isLoading}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>

      <div className="text-center">
        Don't have an account yet?{" "}
        <Link href={ROUTES.REGISTER} className="text-blue-600">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
