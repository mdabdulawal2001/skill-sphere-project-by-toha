"use client";
import React from "react";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import Image from "next/image";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const showLoader = isPending && !session; 
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Logout Successful");
  };

  // closing drawer after clicking sidebar link
  const closeDrawer = () => {
    const drawer = document.getElementById("my-drawer-1");
    if (drawer) {
      drawer.checked = false;
    }
  };
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        {/* navbar start */}
        <div className="navbar-start">
          {/* logo and name */}
          <div className="flex justify-center items-center gap-3">
            <Image
              className="hidden md:flex"
              width={60}
              height={60}
              src={logo}
              alt="skill logo"
            ></Image>
            <p className="text-2xl md:text-4xl">SkillSphere</p>
          </div>
        </div>
        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 flex">
            <li className="py-2 rounded-md">
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li className="py-2 rounded-md">
              <NavLink href={"/allCoursesPage"}>All Courses</NavLink>
            </li>
            <li className="py-2 rounded-md">
              <NavLink href={"/myProfilePage"}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        {/* navbar end */}
        <div className="navbar-end">
          {/* spinner while session loading */}
          {showLoader && (
            <div className="flex items-center justify-center mr-2">
              <div className="relative w-10 h-10">
                {/* outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent animate-spin"></div>

                {/* inner pulse circle */}
                <div className="absolute inset-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>
          )}

          {!showLoader && !user && (
            <div className="flex gap-3">
              <Link href={`/loginPage`}>
                <button className="btn">Login</button>
              </Link>
              <Link href={`/registerPage`}>
                <button className="btn">Register</button>
              </Link>
            </div>
          )}

          {/* avatar if logged in */}
          {!showLoader && user && (
            <div className="flex gap-2">
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              {/* logout btn */}
              <div className="hidden md:block">
                <Link href={`/loginPage`}>
                  <Button onClick={handleSignOut} variant="danger">
                    Logout
                  </Button>
                </Link>
              </div>

              {/* drawer */}
              <div className="drawer drawer-end md:hidden w-fit mr-2">
                <input
                  id="my-drawer-1"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-1" className="btn drawer-button">
                    <CgMenu></CgMenu>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-1"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li onClick={closeDrawer} className="px-3 py-2 rounded-md">
                      <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li onClick={closeDrawer} className="px-3 py-2 rounded-md">
                      <NavLink href={"/allCoursesPage"}>All Courses</NavLink>
                    </li>
                    <li onClick={closeDrawer} className="px-3 py-2 rounded-md">
                      <NavLink href={"/myProfilePage"}>My Profile</NavLink>
                    </li>
                    <li className="mt-6">
                      <Link href={`/loginPage`}>
                        <Button
                          onClick={handleSignOut}
                          variant="danger"
                          className=""
                        >
                          Logout
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
