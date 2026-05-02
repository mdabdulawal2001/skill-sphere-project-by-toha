"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
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
                <li>
                  <Link
                  className="hover:bg-gray-200 px-3 py-2 rounded-md"
                  href={"/"}
                >
                  Home
                </Link>
                </li>
                <li>
                  <Link
                  className="hover:bg-gray-200 px-3 py-2 rounded-md"
                  href={"/"}
                >
                  All Courses
                </Link>
                </li>
                <li>
                  <Link
                  className="hover:bg-gray-200 px-3 py-2 rounded-md"
                  href={"/"}
                >
                  My Profile
                </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* logo and name */}
          <div className="flex justify-center items-center gap-3">
            <Image className="hidden md:flex" width={20} height={20} src={'file.svg'} alt="skill logo"></Image>
            <p className="text-2xl md:text-4xl">SkillSphere</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 flex">
            <Link className="hover:bg-gray-200 px-3 py-2 rounded-md" href={"/"}>
              Home
            </Link>
            <Link className="hover:bg-gray-200 px-3 py-2 rounded-md" href={"/app/allCoursesPage"}>
              All Courses
            </Link>
            <Link className="hover:bg-gray-200 px-3 py-2 rounded-md" href={"/"}>
              My Profile
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
