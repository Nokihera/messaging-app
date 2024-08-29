import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { auth } from "../config/firebase";

const SignIn = () => {
  const nav = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitError("");
    try {
      console.log("Form Data", values);

      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // If the sign-in is successful, navigate to the home page
      if (userCredential) {
        nav("/message");
      }
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative h-screen flex items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Log In
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-col -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Email
                    </label>
                    <Field
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      name="email"
                      type="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Password
                    </label>
                    <Field
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      name="password"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-indigo-300"
                  >
                    {isSubmitting ? <>Submitting...</> : <>Submit</>}
                  </button>
                </div>
                <button
                  onClick={() => nav("/signup")}
                  className=" p-2 w-full text-center"
                >
                  I don't have any accout.Sign Up
                </button>
                {submitError && (
                  <div className="p-2 w-full text-red-500 text-center">
                    {submitError}
                  </div>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignIn;
