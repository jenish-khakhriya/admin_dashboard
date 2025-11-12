"use client";

import {  memo, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../molecules/Button";
import { apiPut } from "@/utils/api";
import { User, UserFormProps } from "@/utils/type";
import { generateId } from "@/utils";


const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid mobile number")
    .required("Mobile number is required"),
});

const UserForm = ({
  handleUpdateUserData,
  data,
  isEdit = false,
  userData,
  handleClose,
  userId,
  id
} : UserFormProps) => {
    const [isLoading,setIsLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    
  return (
    <div className="md:w-[600px] w-full h-auto bg-white rounded-md flex flex-col gap-4 p-5 shadow-md">
      <h1 className="text-2xl text-black font-semibold">
        {isEdit ? "Edit User Data" : "Add User Data"}
      </h1>

      <Formik
        initialValues={{
          fullName: data?.fullName || "",
          Email: data?.Email || "",
          mobileNumber: data?.mobileNumber || "",
        }}
        validationSchema={validationSchema}
        enableReinitialize
       onSubmit={async (values, { resetForm }) => {
  setIsLoading(true);
  setErrorMessage("");

  const payload: User = {
    ...data,
    ...values,
    id: isEdit ? data?.id as string : generateId(),
    createdDate: isEdit ? data?.createdDate as string : new Date().toISOString(),
  };

  try {
    let updatedData: User[] = [];

    if (isEdit) {
      updatedData = [...(userData ?? [])];
      updatedData.splice(id ?? 0, 1, payload);
    } else {
      updatedData = [...(userData ?? []), payload];
    }

    await apiPut(`/${userId}`, { data: updatedData,...(!isEdit && {dataCount : (userData?.length ?? 0) + 1}) });

    handleUpdateUserData();
    handleClose();
    resetForm();
  } catch (err: any) {
    setErrorMessage(err?.message || "Something went wrong");
  } finally {
    setIsLoading(false);
  }
}}

      >
        {() => (
          <Form className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                name="fullName"
                placeholder="Enter full name"
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Field
                name="Email"
                type="email"
                placeholder="Enter email"
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <ErrorMessage
                name="Email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <Field
                name="mobileNumber"
                placeholder="Enter mobile number"
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="">{errorMessage}</div>
            {/* Buttons */}
            <div className="flex gap-3 justify-end">
              <Button
                type="submit"
                isLoading={isLoading}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {isEdit ? "Update" : "Add"}
              </Button>
              <Button
                type="reset"
                className="bg-gray-400 hover:bg-gray-500 text-white"
              >
                Reset
              </Button>
               <Button
                type="button"
                onClick={handleClose}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Close
              </Button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default  memo(UserForm);
