import Image from "next/image";
import React from "react";
import MotionCard from "@/components/Motion/MotionCard";
import { FaRocket } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(
      `https://skill-sphere-server-0c85.onrender.com/courses/${id}`
    );

    const course = await res.json();

    return {
      title: `${course.title.slice(0, 20)}... | SkillSphere`,
      description: course.description,
    };
  } catch (error) {
    return {
      title: "Course Details | SkillSphere",
      description: "Course details page",
    };
  }
}

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://skill-sphere-server-0c85.onrender.com/courses",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const allCourses = data;

  const course = allCourses.find((c) => String(c.id) === String(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <MotionCard>
      <div className="w-11/12 mx-auto my-10 md:my-24">
        <div
          className="px-3 py-6 md:px-10 max-w-6xl mx-auto md:py-15 bg-white/70
            backdrop-blur-md
            rounded-3xl
            border
            border-blue-100
            shadow-sm"
        >
          {/* TOP SECTION */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* IMAGE */}
            <div className="relative w-full h-75 md:h-85 object-cover">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="w-full rounded-3xl
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105"
              />
            </div>

            {/* INFO */}
            <div className="">
              <h1 className="text-center md:text-left text-3xl md:text-4xl font-bold">{course.title}</h1>

              <p className="text-center md:text-left text-gray-500 mt-2">{course.description}</p>

              {/* BADGES */}
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
                  {course.category}
                </span>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded">
                  {course.level}
                </span>
              </div>

              {/* DETAILS */}
              <div className="mt-4 space-y-2">
                <p className="text-center md:text-left">Instructor: {course.instructor}</p>
                <p className="text-center md:text-left">Duration: {course.duration}</p>
                <p className="text-center md:text-left">Rating: {course.rating}</p>
              </div>

              {/* BUTTON */}
              <button className="mt-6
                        w-full
                        md:w-auto
                        px-8
                        py-3
                        rounded-2xl
                        bg-linear-to-r
                        from-[#035ec4]
                        to-[#047bfb]
                        text-white
                        font-semibold
                        shadow-lg
                        shadow-blue-500/20
                        hover:scale-105
                        hover:shadow-blue-500/40
                        transition-all
                        duration-300
                        animate-[pulse_2.5s_infinite]
                        flex items-center justify-center gap-2
                        ">
                Enroll Now <FaRocket/>
              </button>
            </div>
          </div>

          {/* CURRICULUM SECTION */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>

            <ul className="space-y-3">
              <li className="border
                  border-blue-100
                  p-4
                  rounded-2xl
                  hover:bg-blue-50
                  hover:border-[#047bfb]/30
                  hover:translate-x-2
                  transition-all
                  duration-300">
                Introduction
              </li>
              <li className="border
                  border-blue-100
                  p-4
                  rounded-2xl
                  hover:bg-blue-50
                  hover:border-[#047bfb]/30
                  hover:translate-x-2
                  transition-all
                  duration-300">
                Basics of the Topic
              </li>
              <li className="border
                  border-blue-100
                  p-4
                  rounded-2xl
                  hover:bg-blue-50
                  hover:border-[#047bfb]/30
                  hover:translate-x-2
                  transition-all
                  duration-300">
                Intermediate Concepts
              </li>
              <li className="border
                  border-blue-100
                  p-4
                  rounded-2xl
                  hover:bg-blue-50
                  hover:border-[#047bfb]/30
                  hover:translate-x-2
                  transition-all
                  duration-300">
                Advanced Techniques
              </li>
              <li className="border
                  border-blue-100
                  p-4
                  rounded-2xl
                  hover:bg-blue-50
                  hover:border-[#047bfb]/30
                  hover:translate-x-2
                  transition-all
                  duration-300">
                Final Project
              </li>
            </ul>
          </div>

          {/* EXTRA SECTION */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="group
                  bg-white
                  border
                  border-blue-100
                  rounded-3xl
                  p-6
                  text-center
                  shadow-sm
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                  hover:-translate-y-2
                  transition-all
                  duration-500">
              <h3 className="text-xl font-bold">1200+</h3>
              <p className="text-gray-500">Students Enrolled</p>
            </div>

            <div className="group
                  bg-white
                  border
                  border-blue-100
                  rounded-3xl
                  p-6
                  text-center
                  shadow-sm
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                  hover:-translate-y-2
                  transition-all
                  duration-500">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-gray-500">Lessons</p>
            </div>

            <div className="group
                  bg-white
                  border
                  border-blue-100
                  rounded-3xl
                  p-6
                  text-center
                  shadow-sm
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                  hover:-translate-y-2
                  transition-all
                  duration-500">
              <h3 className="text-xl font-bold">Certificate</h3>
              <p className="text-gray-500">After Completion</p>
            </div>
          </div>
        </div>
      </div>
    </MotionCard>
  );
};

export default CourseDetailsPage;
