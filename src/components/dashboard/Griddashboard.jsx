import React from 'react'
import './Griddashboard.css'

const Griddashboard = () => {
  return (
    <div className='dashboard-grid'>
              <div className='dashboard-item'>
                <h3>Attendance</h3>
                <p>Track your attendance records</p>
              </div>
              <div className='dashboard-item'>
                <h3>Course</h3>
                <p>Track the course content</p>
              </div>
            </div>
  )
}

export default Griddashboard