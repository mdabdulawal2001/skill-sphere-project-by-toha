"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm();

  const handleRegisterFunc = async (data) => {
    const {email, name, photo, password} = data;

    const {data: res, error} = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    }) 
    if(!error){
      router.push("/loginPage")
    }
  };

    const handleGoogleSignIn = async () => {
       const data = await authClient.signIn.social({
      provider: "google",
    });
    }

  return (
    <div className="my-10 md:my-16 min-h-screen flex items-center justify-center px-4">
      {/* CARD */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center">
          Registration ✨
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Create your SkillSphere account
        </p>

        {/* FORM */}
        <Form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="flex flex-col gap-5"
        >

          {/* NAME */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField isRequired>
                <Label>Name</Label>
                <Input {...field} placeholder="Enter your name" />
                <FieldError />
              </TextField>
            )}
          />

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
                <Input {...field} placeholder="Enter your email" />
                <FieldError />
              </TextField>
            )}
          />

          {/* PHOTO URL */}
          <Controller
            name="photo"
            control={control}
            render={({ field }) => (
              <TextField isRequired>
                <Label>Photo URL</Label>
                <Input {...field} placeholder="Paste your image link" />
                <Description>
                  Your profile picture will be shown publicly
                </Description>
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
                <Input {...field} type="password" placeholder="Enter password" />
                <FieldError />
              </TextField>
            )}
          />

          {/* REGISTER BUTTON */}
          <Button type="submit" className="w-full bg-blue-500 text-white">
            Register
          </Button>
        </Form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-2">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href={`/loginPage`} className="text-blue-500 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;