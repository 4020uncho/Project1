import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CourseCard from '../../components/CourseCard/Coursecard'
import coursesData from '../../Data/coursedata'
import { Outlet } from 'react-router-dom'

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <Navbar />
      <h1>Department of IT - Courses</h1>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <CourseCard
            key={course.description}
            description={course.description}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default CoursesPage;