"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../molecules/Button";
import { apiGet } from "@/utils/api";
import Link from "next/link";
import { ROUTES } from "@/constant/route";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUserExists, setIsUserExists] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Yup validation schema
  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full name must be at least 3 characters")
      .required("Full name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
      .matches(/[a-z]/, "Must contain at least 1 lowercase letter")
      .matches(/[0-9]/, "Must contain at least 1 number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least 1 special character")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  // ✅ Form submission handler
  const handleSubmit = async (values: {
    fullName: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
  }) => {

    const {email,fullName,mobileNumber,password} = values
    try {
      const ischeckEmail = await apiGet();
      if (ischeckEmail?.some(({ email }: { email: string }) => email === values.email)) {
        setIsUserExists(true);
        return;
      }


      setIsLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email,fullName,mobileNumber,password}),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("User registered:", data);
        router.push("/dashboard");
      } else {
        setIsUserExists(true);
        setIsUserExists(false);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-orange-500 text-center h-5">
        {isUserExists && "User already exists!"}
      </div>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          mobileNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="p-2 w-full rounded border-2 border-black bg-transparent outline-none"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 w-full rounded border-2 border-black bg-transparent outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <Field
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                className="p-2 w-full rounded border-2 border-black bg-transparent outline-none"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="p-2 w-full rounded border-2 border-black bg-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[50%] translate-y-[-50%] right-[10px] text-gray-500 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="relative">
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="p-2 w-full rounded border-2 border-black bg-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-[50%] translate-y-[-50%] right-[10px] text-gray-500 text-sm"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              isloading={isLoading}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <div className="text-center">
        Already have an account? <Link href={ROUTES.LOGIN} className="text-blue-600">Sign in</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
