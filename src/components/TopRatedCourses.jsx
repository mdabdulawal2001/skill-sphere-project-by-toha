import Image from "next/image";
import React from "react";
import { FcRating } from "react-icons/fc";
import MotionCard from "./Motion/MotionCard";

const TopRatedCourses = async () => {
  const res = await fetch(
    "https://skill-sphere-server-0c85.onrender.com/courses",
    { cache: "no-store" }
  );
  const data = await res.json();
  const courses = data;

  console.log(courses);
  // top 3 highest rating
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <div className="md:w-11/12 max-w-7xl mx-auto mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Popular Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCourses.map((course) => (
            <MotionCard key={course.id}>
              <div
              className=" group
      bg-white
      rounded-3xl
      overflow-hidden
      border
      border-blue-100
      shadow-md
      hover:shadow-2xl
      hover:shadow-blue-500/10
      transition-all
      duration-500"
            >
              {/* IMAGE */}
              <Image
                src={course.image}
                alt={course.title}
                className="w-full
        h-52
        object-cover
        group-hover:scale-105
        transition-transform
        duration-700"
                width={400}
                height={200}
              />

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Instructor: {course.instructor}
                </p>

                <p className="mt-2 font-medium flex items-center gap-2">
                  <FcRating /> {course.rating}
                </p>

                <a
                  href={`/allCoursesPage/${course.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 rounded bg-linear-to-r
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
                  View Details
                </a>
              </div>
            </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedCourses;
