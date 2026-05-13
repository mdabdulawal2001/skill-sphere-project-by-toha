"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import UpdateUser from "@/components/UpdateUser";
import { BiEdit } from "react-icons/bi";
import MotionScale from "./Motion/MotionScale";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <MotionScale>
      <div>
        <div className="max-w-5xl mx-auto px-4 py-10 my-5 md:my-10">
          {/* HEADER */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Profile</h1>

          {/* PROFILE CARD */}
          <div
            className="flex justify-center md:justify-between items-center bg-white
            shadow-sm
            hover:shadow-2xl
            hover:shadow-blue-500/10
            border
            border-blue-100
            rounded-3xl
            p-6
            transition-all
            duration-500
            hover:-translate-y-1"
          >
            {/* IMAGE */}
            <div className=" md:flex items-center gap-8">
              <div className="flex justify-center">
                <Avatar
                  className="w-20 h-20  ring-4
                     ring-blue-100
                     transition-all
                     duration-500
                     hover:scale-110
                     hover:ring-[#047bfb]
                     hover:shadow-xl
                     hover:shadow-blue-500/30"
                >
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {
                      <span className="font-bold text-3xl">
                        {user?.name.charAt(0)}
                      </span>
                    }
                  </Avatar.Fallback>
                </Avatar>
              </div>

              {/* INFO */}
              <div className="mt-6 md:mt-0 flex-1 flex flex-col items-center md:flex-none md:items-start">
                <h2 className="text-2xl font-semibold">{user?.name}</h2>
                <p className="text-gray-500 mt-1 text-xl">{user?.email}</p>

                {/* BUTTON */}
                <Link
                  href={`/myProfilePage/profileEditPage`}
                  className="mt-4 pt-1"
                >
                  <button
                    className="btn bg-[#281af8ca]  px-6
                    py-2.5
                    rounded-xl
                    bg-linear-to-r
                    from-[#035ec4]
                    to-[#047bfb]
                    text-white
                    font-semibold
                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-blue-500/30
                    transition-all
                    duration-300"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <UpdateUser></UpdateUser>
            </div>
          </div>

          {/* EXTRA SECTION */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div
              className="rounded-xl  group
              relative
              overflow-hidden
              border
              border-blue-100
              p-6
              text-center
              bg-white
              shadow-sm
              hover:shadow-2xl
              hover:shadow-blue-500/10
              hover:-translate-y-2
              transition-all
              duration-500"
            >
              <h3 className="text-4xl font-black
                text-[#047bfb]
                transition-all
                duration-300
                group-hover:scale-110">5</h3>
              <p className="text-gray-500">Courses Enrolled</p>
            </div>

            <div
              className="rounded-xl  group
              relative
              overflow-hidden
              border
              border-blue-100
              p-6
              text-center
              bg-white
              shadow-sm
              hover:shadow-2xl
              hover:shadow-blue-500/10
              hover:-translate-y-2
              transition-all
              duration-500"
            >
              <h3 className="text-4xl font-black
                text-[#047bfb]
                transition-all
                duration-300
                group-hover:scale-110">3</h3>
              <p className="text-gray-500">Completed</p>
            </div>

            <div className="rounded-xl  group
                  relative
                  overflow-hidden
                  border
                  border-blue-100
                  p-6
                  text-center
                  bg-white
                  shadow-sm
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                  hover:-translate-y-2
                  transition-all
                  duration-500">
              <h3 className="text-4xl font-black
                  text-[#047bfb]
                  transition-all
                  duration-300
                  group-hover:scale-110">2</h3>
              <p className="text-gray-500">Ongoing</p>
            </div>
          </div>
        </div>
      </div>
    </MotionScale>
  );
};

export default MyProfilePage;
