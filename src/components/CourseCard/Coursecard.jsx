import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, code, description, credits }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p className="code">{code}</p>
      <p>{description}</p>
      <p className="credits">Credits: {credits}</p>
    </div>
  );
};

export default CourseCard;