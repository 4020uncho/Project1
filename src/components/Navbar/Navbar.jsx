import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#Courses">Courses</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;