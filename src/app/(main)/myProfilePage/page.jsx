'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import UpdateUser from "@/components/UpdateUser";
import { BiEdit } from "react-icons/bi";

const MyProfilePage = () => {
  const {data: session} = authClient.useSession();
   const user = session?.user;
    console.log(user);
    
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">👤 My Profile</h1>

        {/* PROFILE CARD */}
        <div className="flex justify-between items-center bg-white shadow rounded-xl p-6">
          {/* IMAGE */}
         <div className=" md:flex items-center gap-8">
           <div className="flex justify-center">
            <Avatar className="w-20 h-20">
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
          </div>

          {/* INFO */}
          <div className="mt-6 md:mt-0 flex-1 flex flex-col items-center md:flex-none md:items-start">
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
            <p className="text-gray-500 mt-1">{user?.email}</p>

            {/* BUTTON */}
              <UpdateUser></UpdateUser>
          </div>
         </div>
            <div className="hidden md:block">
              <span>
                <BiEdit size={30} className="text-gray-600 hover:text-blue-500 transition duration-300 cursor-pointer"></BiEdit>
              </span>
            </div>
        </div>

        {/* EXTRA SECTION */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-4 text-center">
            <h3 className="text-xl font-bold">5</h3>
            <p className="text-gray-500">Courses Enrolled</p>
          </div>

          <div className="border rounded-xl p-4 text-center">
            <h3 className="text-xl font-bold">3</h3>
            <p className="text-gray-500">Completed</p>
          </div>

          <div className="border rounded-xl p-4 text-center">
            <h3 className="text-xl font-bold">2</h3>
            <p className="text-gray-500">Ongoing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
