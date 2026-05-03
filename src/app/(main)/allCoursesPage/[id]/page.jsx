import React from 'react';

const courseDetailsPage = async ({ params }) => {
  const {id} = await params; // ✅ correct

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const allCourses = data.courses;

  const course = allCourses.find(
    (c) => String(c.id) === String(id)
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-2">{course.description}</p>
      <p>👨‍🏫 {course.instructor}</p>
      <p>⭐ {course.rating}</p>
    </div>
  );
};

export default courseDetailsPage;