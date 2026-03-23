import React from 'react'
import { Link } from 'react-router-dom'

const Nav1 = () => {
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/firstsemester">First Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/secondsemester">Second Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/thirdsemester">Third Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/fourthsemester">Fourth Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/fifthsemester">Fifth Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/sixthsemester">Sixth Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/seventhsemester">Seventh Semester</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses/eighthsemester">Eighth Semester</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav1