import React from 'react';

const TopRatedCourses = async () => {
        const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json();
    console.log(data);
    return (
        <div>
            this is top Rated part
        </div>
    );
};

export default TopRatedCourses;