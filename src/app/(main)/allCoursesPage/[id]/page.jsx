import Image from "next/image";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params; // ✅ correct

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const allCourses = data.courses;

  const course = allCourses.find((c) => String(c.id) === String(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="my-6 md:my-8">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* IMAGE */}
          <div className="relative w-full h-75 md:h-85 object-cover">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          {/* INFO */}
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>

            <p className="text-gray-500 mt-2">{course.description}</p>

            {/* BADGES */}
            <div className="flex gap-3 mt-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
                {course.category}
              </span>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded">
                {course.level}
              </span>
            </div>

            {/* DETAILS */}
            <div className="mt-4 space-y-2">
              <p>👨‍🏫 Instructor: {course.instructor}</p>
              <p>⏱ Duration: {course.duration}</p>
              <p>⭐ Rating: {course.rating}</p>
            </div>

            {/* BUTTON */}
            <button className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Enroll Now 🚀
            </button>
          </div>
        </div>

        {/* 📚 CURRICULUM SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">📚 Course Curriculum</h2>

          <ul className="space-y-3">
            <li className="hover:bg-[#dedcdc] border p-3 rounded">
              Introduction
            </li>
            <li className="hover:bg-[#dedcdc] border p-3 rounded">
              Basics of the Topic
            </li>
            <li className="hover:bg-[#dedcdc] border p-3 rounded">
              Intermediate Concepts
            </li>
            <li className="hover:bg-[#dedcdc] border p-3 rounded">
              Advanced Techniques
            </li>
            <li className="hover:bg-[#dedcdc] border p-3 rounded">
              Final Project
            </li>
          </ul>
        </div>

        {/* ⭐ EXTRA SECTION */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl text-center">
            <h3 className="text-xl font-bold">1200+</h3>
            <p className="text-gray-500">Students Enrolled</p>
          </div>

          <div className="p-4 border rounded-xl text-center">
            <h3 className="text-xl font-bold">15+</h3>
            <p className="text-gray-500">Lessons</p>
          </div>

          <div className="p-4 border rounded-xl text-center">
            <h3 className="text-xl font-bold">Certificate</h3>
            <p className="text-gray-500">After Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
