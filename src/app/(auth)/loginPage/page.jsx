"use client";

import React from "react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const { control, handleSubmit } = useForm();

  const handleLoginFunc = async (data) => {
    const {email, password} = data;
    console.log(email, password);

      const {data: res, error} = await authClient.signIn.email({
        email: email, // required
        password: password, // required
        callbackURL: "/",
        }) 
        console.log({res, error});
        
  };

  const handleGoogleSignIn = async () => {
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <div className="my-10 md:my-16 min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back 
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to continue your learning journey
        </p>

        {/* FORM */}
        <Form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="flex flex-col gap-5"
        >

          {/* EMAIL */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                isRequired
                validate={(value) => {
                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input className="w-full" {...field} placeholder="Enter your email" />
                <FieldError />
              </TextField>
            )}
          />

          {/* PASSWORD */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                isRequired
                validate={(value) => {
                  if (value.length < 8) {
                    return "Minimum 8 characters required";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "At least 1 uppercase letter required";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "At least 1 number required";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input className="w-full" {...field} type="password" placeholder="Enter password" />
                <FieldError />
              </TextField>
            )}
          />

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 mt-2">

            <Button type="submit" className="w-full bg-blue-500 text-white">
              Login
            </Button>

            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>
        </Form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-2">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="flex flex-col gap-3">

          <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" />
            Login with Google
          </button>

          {/* <button className="flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
            <FaGithub />
            Login with GitHub
          </button> */}
        </div>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link href="/registerPage" className="text-blue-500 cursor-pointer">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;