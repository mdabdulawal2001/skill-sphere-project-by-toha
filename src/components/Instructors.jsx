import Image from "next/image";
import React from "react";
import MotionScale from "./Motion/MotionScale";
import { FaRegClosedCaptioning } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Instructors = async () => {
  const res = await fetch(
    "https://skill-sphere-server-0c85.onrender.com/instructors",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const instructors = data;
  // console.log(instructors);

  return (
    <div className="mb-12 md:mb-18">
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Top Instructors</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {instructors.map((ins) => (
            <MotionScale key={ins.id}>
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  border
                  border-blue-100
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                  transition-all
                  duration-500
                  text-center"
              >
                {/* TOP GLOW */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-linear-to-r
                    from-[#047bfb]
                    to-cyan-400"
                />

                {/* IMAGE */}
                <div className="flex justify-center">
                  <div
                    className="
                      rounded-full
                      p-0.75
                      bg-linear-to-r
                      from-[#047bfb]
                      to-cyan-400"
                  >
                    <Image
                      src={ins.image}
                      alt={ins.name}
                      width={90}
                      height={90}
                      className="
                        rounded-full
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-500"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="mt-5 font-bold text-xl text-slate-900">
                  {ins.name}
                </h3>

                {/* ROLE */}
                <p className="text-sm text-slate-500 mt-1">{ins.role}</p>

                {/* EXPERIENCE */}
                <p className="mt-4 text-sm text-slate-700">{ins.experience}</p>

                {/* STUDENTS */}
                <p className="text-sm text-slate-700 mt-1">
                  {ins.students} Students
                </p>

                {/* RATING */}
                <p
                  className="
                    flex
                    justify-center
                    items-center
                    gap-2
                    mt-4
                    px-3
                    py-1
                    rounded-full
                    bg-yellow-100
                    text-yellow-600
                    font-semibold
                    text-sm"
                >
                  <FaStar></FaStar> {ins.rating}
                </p>
              </div>
            </MotionScale>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
