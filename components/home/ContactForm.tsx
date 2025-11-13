"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          phone: Yup.string().required("Required"),
          message: Yup.string().required("Required"),
          agree: Yup.bool().oneOf([true], "You must accept the terms."),
        })}
        onSubmit={(values) => {
          console.log(values);
          alert("Form submitted!");
        }}
      >
        {() => (
          <Form className="flex flex-col gap-8">

            {/* Row: First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Field
                  name="firstName"
                  placeholder="John"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage name="firstName" className="text-red-500 text-sm" component="div" />
              </div>

              <div>
                <Field
                  name="lastName"
                  placeholder="Dare"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage name="lastName" className="text-red-500 text-sm" component="div" />
              </div>
            </div>

            {/* Row: Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Field
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage name="email" className="text-red-500 text-sm" component="div" />
              </div>

              <div>
                <Field
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage name="phone" className="text-red-500 text-sm" component="div" />
              </div>
            </div>

            {/* Message */}
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Your Text"
                className="w-full px-3 py-2 border rounded h-24"
              />
              <ErrorMessage name="message" className="text-red-500 text-sm" component="div" />
            </div>

            {/* Checkbox */}
            <label className="flex items-start space-x-2">
              <Field type="checkbox" name="agree" className="w-7 h-7" />
              <span className="text-lg font-urbanist text-[#8C94A3]">
                I agree that braintree may contact me at the email address or phone number above.
              </span>
            </label>
            <ErrorMessage name="agree" className="text-red-500 text-sm" component="div" />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full text-lg"
              
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
  );
}


export default ContactForm;