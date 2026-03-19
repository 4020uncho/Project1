import React from 'react';
import './CourseCard.css';

const CourseCard = ({  description, }) => {
  return (
    <div className="course-card">
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;