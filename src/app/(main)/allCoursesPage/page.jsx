import React from "react";
import Image from "next/image";
import Link from "next/link";

const allCoursesPage = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  const courses = data.courses;

  const courseCategory = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">📚 All Courses</h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-xl shadow hover:shadow-xl transition overflow-hidden bg-white"
            >
              {/* IMAGE */}
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                {/* CATEGORY + LEVEL */}
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {course.category}
                  </span>

                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === "Advanced"
                        ? "bg-green-100 text-green-600"
                        : course.level === "Intermediate"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-lg font-semibold">{course.title}</h2>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 mt-1">
                  {course.description.slice(0, 120)}...
                </p>

                {/* DETAILS */}
                <div className="mt-3 text-sm space-y-1">
                  <p>👨‍🏫 {course.instructor}</p>
                  <p>⏱ {course.duration}</p>
                  <p>⭐ {course.rating}</p>
                </div>

                {/* BUTTON */}
                <Link
                  href={`/courses/${course.id}`}
                  className="mt-4 inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default allCoursesPage;
