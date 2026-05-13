import Image from "next/image";
import React from "react";
import MotionCard from "./Motion/MotionCard";

const TrendingSection = async () => {
  const res = await fetch("https://skill-sphere-server-0c85.onrender.com/courses", {
    cache: "no-store",
  });
  const data = await res.json();
  const courses = data;

  // Trending (simple logic: first 4)
  const trending = courses.slice(0, 4);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Trending Courses
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trending.map((course) => (
            <MotionCard key={course.id}>
              <div
              className="group
      bg-white
      rounded-2xl
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
              className="w-full h-32
        object-cover
        group-hover:scale-103
        transition-transform
        duration-700"
              width={200}
              height={200}
            />

              {/* TITLE */}
              <h3 className="text-sm font-semibold ml-2 mt-2">{course.title}</h3>

              {/* LINK */}
              <a
                href={`/allCoursesPage/${course.id}`}
                className="text-blue-500 text-sm ml-2 mb-3 mt-2 inline-block rounded
          
          font-semibold
          hover:scale-105
          hover:shadow-lg
          hover:shadow-blue-500/30
          transition-all
          duration-300"
              >
                View →
              </a>
            </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
