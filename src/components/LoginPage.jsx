"use client";
import React, { useState } from "react";
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
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import MotionScale from "./Motion/MotionScale";

const LoginPage = () => {
  const { control, handleSubmit } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleLoginFunc = async (data) => {
  const { email, password } = data;

  // loading toast
  const loadingToast = toast.loading("Logging in...");

  try {
    
    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ res, error });

    // remove loading toast
    toast.dismiss(loadingToast);

    // error handling
    if (error) {
      toast.error(error.message || "Login failed ❌");
      return;
    }

    // success
    toast.success("Login successful 🎉");

  } catch (err) {

    toast.dismiss(loadingToast);

    console.log(err);

    toast.error("Something went wrong ❌");
  }
};

  const handleGoogleSignIn = async () => {
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <MotionScale>
      <div className="my-10 md:my-16 flex items-center justify-center px-4">

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
            defaultValue=""
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
                <Input value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref} className="w-full"  placeholder="Enter your email" />
                <FieldError />
              </TextField>
            )}
          />

          {/* PASSWORD */}
          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                className="relative"
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
                <Input
                 type={`${isShowPassword ? "text" : "password"}`}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                className="w-full" placeholder="Enter password" />
                <FieldError />
                <span className="cursor-pointer absolute right-3 top-9" onClick={()=> setIsShowPassword(!isShowPassword)}>
                  {
                    isShowPassword ? <FaEye></FaEye> : <FaEyeSlash />
                  }
                </span>
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
    </MotionScale>
  );
};

export default LoginPage;