import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CourseCard from '../../components/CourseCard/Coursecard'
import coursesData from '../../Data/coursedata'

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <Navbar />
      <h1>Department of IT - Courses</h1>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <CourseCard
            key={course.code}
            title={course.title}
            code={course.code}
            description={course.description}
            credits={course.credits}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;