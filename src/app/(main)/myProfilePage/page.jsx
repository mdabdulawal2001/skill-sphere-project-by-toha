import React from "react";
import Link from "next/link";
import Image from "next/image";

const myProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">👤 My Profile</h1>

        {/* PROFILE CARD */}
        <div className="bg-white shadow rounded-xl p-6 md:flex items-center gap-8">
          {/* IMAGE */}
          <div className="flex justify-center">
            <Image
              src={user.image}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-500"
            />
          </div>

          {/* INFO */}
          <div className="mt-6 md:mt-0 flex-1 flex flex-col items-center md:flex-none md:items-start">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500 mt-1">{user.email}</p>

            {/* BUTTON */}
            <Link
              href="/profile/update"
              className="inline-block mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Update Profile
            </Link>
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

export default myProfilePage;
