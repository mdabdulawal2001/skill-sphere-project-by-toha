import Image from "next/image";
import React from "react";

const Instructors = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const data = await res.json();

  const instructors = data.instructors;
  console.log(instructors);

  return (
    <div className="mb-8 md:mb-10">
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          🏆 Top Instructors
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {instructors.map((ins) => (
            <div
              key={ins.id}
              className="border rounded-xl p-5 shadow hover:shadow-xl transition hover:scale-105 bg-white text-center"
            >
              {/* IMAGE */}
              <div className="flex justify-center">
                <Image
                  src={ins.image}
                  alt={ins.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-blue-500"
                />
              </div>

              {/* NAME */}
              <h3 className="mt-4 font-semibold text-lg">{ins.name}</h3>

              {/* ROLE */}
              <p className="text-sm text-gray-500">{ins.role}</p>

              {/* EXPERIENCE */}
              <p className="mt-2 text-sm">📅 {ins.experience}</p>

              {/* STUDENTS */}
              <p className="text-sm">👨‍🎓 {ins.students} Students</p>

              {/* RATING */}
              <p className="mt-2 font-medium text-yellow-500">
                ⭐ {ins.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
