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


const Navbar = () => {
  // closing drawer after clicking sidebar link
  const {data: session} = authClient.useSession();
  const user = session?.user;
  console.log(user);
  
  const handleSignOut = async () => {
    await authClient.signOut();
  }
  
  
  
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
          <div className="drawer md:hidden w-fit mr-2">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
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
                  <NavLink
                  href={"/"}
                >
                  Home
                </NavLink>
                </li>
                <li onClick={closeDrawer} className="px-3 py-2 rounded-md">
                  <NavLink
                  href={"/allCoursesPage"}
                >
                  All Courses
                </NavLink>
                </li>
                <li onClick={closeDrawer} className="px-3 py-2 rounded-md">
                  <NavLink
                  href={"/myProfilePage"}
                >
                  My Profile
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* logo and name */}
          <div className="flex justify-center items-center gap-3">
            <Image className="hidden md:flex" width={60} height={60} src={logo} alt="skill logo"></Image>
            <p className="text-2xl md:text-4xl">SkillSphere</p>
          </div>
        </div>
        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 flex">
            <li className="py-2 rounded-md">
              <NavLink href={"/"}>
              Home
            </NavLink>
            </li>
            <li className="py-2 rounded-md">
              <NavLink href={"/allCoursesPage"}>
              All Courses
            </NavLink>
            </li>
           <li className="py-2 rounded-md">
             <NavLink href={"/myProfilePage"}>
              My Profile
            </NavLink>
           </li>
          </ul>
        </div>
        {/* navbar end */}
        <div className="navbar-end">
         { !user && <div className="flex gap-3">
          <Link href={`/loginPage`}><button className="btn">Login</button></Link>
          <Link href={`/registerPage`}><button className="btn">Register</button></Link>
          </div>}
          
          {/* avatar if logged in */}
          { user && <div className="flex gap-2">
            <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

      <div className="">
            <Link href={`/loginPage`}><Button onClick={handleSignOut} variant="danger" className="">Logout</Button></Link>
          </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
