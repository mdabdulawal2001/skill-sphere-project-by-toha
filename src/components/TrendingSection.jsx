import Image from "next/image";
import React from "react";

const TrendingSection = async () => {
  const res = await fetch("https://skill-sphere-server-0c85.onrender.com/courses", {
    cache: "no-store",
  });
  const data = await res.json();
  const courses = data;

  // 🔥 Trending (simple logic: first 4)
  const trending = courses.slice(0, 4);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          🚀 Trending Courses
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trending.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg p-3 shadow hover:shadow-lg hover:scale-105 transition"
            >
              {/* IMAGE */}
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-cover"
              width={200}
              height={200}
            />

              {/* TITLE */}
              <h3 className="text-sm font-semibold mt-2">{course.title}</h3>

              {/* LINK */}
              <a
                href={`/allCoursesPage/${course.id}`}
                className="text-blue-500 text-sm mt-2 inline-block"
              >
                View →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
