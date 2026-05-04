import React from 'react';

const Category = async () => {

  const res = await fetch("https://skill-sphere-server-0c85.onrender.com/courses", {
    cache: "no-store",
  });
  const data = await res.json();
  const courses = data;
//   console.log(courses);
  
    return (
        <div>
            category
        </div>
    );
};

export default Category;