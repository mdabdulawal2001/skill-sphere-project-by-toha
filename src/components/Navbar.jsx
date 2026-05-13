"use client";
import React from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import Image from "next/image";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import gradient from "../assets/gradient-picture2.jpg"

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  // loader only for initial auth checking
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
// bg-[#052efb]/10
  return (
    <div style={{
    backgroundImage: `url(${gradient.src})`,
  }} className="bg-cover shadow-sm">
      <div className="w-11/12 container mx-auto navbar">
        {/* navbar start */}
        <div className="navbar-start">
          {/* logo and name */}
          <div className="flex justify-center items-center gap-3">
            <Image
              className="hidden md:flex"
              width={50}
              height={50}
              src={logo}
              alt="skill logo"
            />

            <p className="text-3xl md:text-4xl text-[#052efb]/80 font-bold">
              SkillSphere
            </p>
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

          {/* loader */}
          {showLoader && (
            <div className="flex items-center justify-center mr-2">
              <div className="relative w-10 h-10">

                {/* outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent animate-spin"></div>

                {/* inner pulse */}
                <div className="absolute inset-2 rounded-full bg-blue-500 animate-pulse"></div>

              </div>
            </div>
          )}

          {/* main navbar content */}
          {!showLoader && (
            <div className="flex items-center gap-2">

              {/*  DESKTOP */}

              {/* desktop logged out */}
              {!user && (
                <div className="hidden md:flex gap-3">

                  <Link href="/loginPage">
                    <button className="btn text-white/90 bg-[#052efb]/80 hover:bg-[#052efb]/70 border-none">
                      Login
                    </button>
                  </Link>

                  <Link href="/registerPage">
                    <button className="btn text-white/90 bg-[#052efb]/80 hover:bg-[#052efb]/70 border-none">
                      Register
                    </button>
                  </Link>

                </div>
              )}

              {/* desktop logged in */}
              {user && (
                <>
                  {/* avatar */}
                  <Avatar className="hidden md:flex">
                    <Avatar.Image
                      alt="User"
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />

                    <Avatar.Fallback>
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>

                  {/* logout button desktop */}
                  <div className="hidden md:block">
                    <Button
                      onClick={handleSignOut}
                      variant="danger"
                      className="pt-0.5 bg-[#052efb]/90 hover:bg-[#052efb]/70"
                    >
                      Logout
                    </Button>
                  </div>
                </>
              )}

              {/* MOBILE DRAWER */}

              <div className="drawer drawer-end md:hidden">

                <input
                  id="my-drawer-1"
                  type="checkbox"
                  className="drawer-toggle"
                />

                {/* drawer button */}
                <div className="drawer-content flex items-center gap-2">

                  {/* avatar for mobile */}
                  {user && (
                    <Avatar className="w-10 h-10">
                      <Avatar.Image
                        alt="User"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />

                      <Avatar.Fallback>
                        {user?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                  )}

                  {/* menu button */}
                  <label
                    htmlFor="my-drawer-1"
                    className="btn btn-info drawer-button bg-[#052efb]/50 border-none"
                  >
                    <CgMenu size={22} className="text-[#070707]" />
                  </label>

                </div>

                {/* drawer sidebar */}
                <div className="drawer-side z-50">

                  <label
                    htmlFor="my-drawer-1"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <ul className="menu bg-base-200 min-h-full w-80 p-4">

                    {/* user info */}
                    {user && (
                      <div className="flex flex-col items-center mb-6 mt-2">

                        <Avatar className="w-16 h-16">
                          <Avatar.Image
                            alt="User"
                            src={user?.image}
                            referrerPolicy="no-referrer"
                          />

                          <Avatar.Fallback>
                            {user?.name?.charAt(0)}
                          </Avatar.Fallback>
                        </Avatar>

                        <p className="mt-3 font-semibold text-lg">
                          {user?.name}
                        </p>

                      </div>
                    )}

                    {/* nav links */}
                    <li
                      onClick={closeDrawer}
                      className="px-3 py-2 rounded-md"
                    >
                      <NavLink href={"/"}>
                        Home
                      </NavLink>
                    </li>

                    <li
                      onClick={closeDrawer}
                      className="px-3 py-2 rounded-md"
                    >
                      <NavLink href={"/allCoursesPage"}>
                        All Courses
                      </NavLink>
                    </li>

                    <li
                      onClick={closeDrawer}
                      className="px-3 py-2 rounded-md"
                    >
                      <NavLink href={"/myProfilePage"}>
                        My Profile
                      </NavLink>
                    </li>

                    {/* logged in */}
                    {user ? (
                      <li className="mt-6">
                        <Button
                          onClick={() => {
                            handleSignOut();
                            closeDrawer();
                          }}
                          variant="danger"
                          className="w-full"
                        >
                          Logout
                        </Button>

                      </li>
                    ) : (
                      /* logged out */
                      <div className="mt-6 flex flex-col gap-3">
                        <Link
                          href="/loginPage"
                          onClick={closeDrawer}
                        >
                          <Button className="bg-[#052efb]/90 hover:bg-[#052efb]/70 w-full">
                            Login
                          </Button>
                        </Link>

                        <Link
                          href="/registerPage"
                          onClick={closeDrawer}
                        >
                          <Button
                            className="w-full text-white bg-[#4663f0]"
                            variant="solid"
                          >
                            Register
                          </Button>
                        </Link>
                      </div>
                    )}

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