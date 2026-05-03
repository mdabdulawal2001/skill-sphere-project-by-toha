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
import { CgCheck } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const RegisterPage = () => {
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
        <Form className="flex flex-col gap-5">

          {/* NAME */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          {/* EMAIL */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* PHOTO URL */}
          <TextField isRequired name="photo" type="text">
            <Label>Photo URL</Label>
            <Input placeholder="Paste your image link" />
            <Description>
              Your profile picture will be shown publicly
            </Description>
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Create a strong password" />
            <Description>
              Minimum 8 characters recommended
            </Description>
            <FieldError />
          </TextField>

          {/* REGISTER BUTTON */}
          <Button className="w-full bg-blue-500 text-white">
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
        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/loginPage" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;