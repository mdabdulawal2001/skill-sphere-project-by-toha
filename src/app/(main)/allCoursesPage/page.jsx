"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  // fetch data
  useEffect(() => {
    fetch("https://skill-sphere-server-0c85.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // filter logic
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10 my-6 md:my-10">
        
        {/* HEADER */}
        <div className="flex flex-col gap-6 justify-center items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            📚 All Courses
          </h1>

          {/* SEARCH */}
          <div className="mb-6 w-10/12 md:w-3/12">
            <input
              type="text"
              placeholder="Search by title..."
              className="input input-bordered w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {/* not found */}
                {filteredCourses.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No courses found
        </p>
      )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="my-3 border rounded-xl shadow hover:shadow-xl hover:scale-105 transition overflow-hidden bg-white"
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
                <h2 className="text-lg font-semibold">
                  {course.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {course.description.slice(0, 100)}...
                </p>

                <Link
                  href={`/allCoursesPage/${course.id}`}
                  className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 rounded"
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



// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";


// const allCoursesPage = async () => {
//   const res = await fetch("https://skill-sphere-server-0c85.onrender.com/courses", {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   const courses = data;


//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-10 my-6 md:my-10">
//         {/* HEADER */}
//        <div className="flex flex-col gap-6 justify-center items-center mb-6">
//          <h1 className="text-3xl md:text-4xl font-bold">📚 All Courses</h1>
//         <div className="mb-6 w-10/12 md:w-3/12">
//           <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//         </div>
//        </div>
//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="my-3 border rounded-xl shadow hover:shadow-xl hover:scale-105 transition overflow-hidden bg-white"
//             >
//               {/* IMAGE */}
//               <div className="relative w-full h-48">
//                 <Image
//                   src={course.image}
//                   alt={course.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-4">
//                 {/* CATEGORY + LEVEL */}
//                 <div className="flex justify-between items-center text-xs mb-2">
//                   <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
//                     {course.category}
//                   </span>

//                   <span
//                     className={`px-2 py-1 rounded text-xs font-medium ${
//                       course.level === "Advanced"
//                         ? "bg-green-200 text-green-600"
//                         : course.level === "Intermediate"
//                         ? "bg-[#f8daef] text-[#f055f8]"
//                         : "bg-yellow-100 text-yellow-600"
//                     }`}
//                   >
//                     {course.level}
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h2 className="text-lg font-semibold">{course.title}</h2>

//                 {/* DESCRIPTION */}
//                 <p className="text-sm text-gray-500 mt-1">
//                   {course.description.slice(0, 120)}...
//                 </p>

//                 {/* DETAILS */}
//                 <div className="mt-3 text-sm space-y-1">
//                   <p>👨‍🏫 {course.instructor}</p>
//                   <p>⏱ {course.duration}</p>
//                   <p>⭐ {course.rating}</p>
//                 </div>

//                 {/* BUTTON */}
//                 <Link
//                   href={`/allCoursesPage/${course.id}`}
//                   className="mt-4 inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default allCoursesPage;
