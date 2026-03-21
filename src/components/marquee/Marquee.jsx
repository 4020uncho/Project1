import React from 'react'
import './Marquee.css'

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="track">
        <span>1. Welcome to Department of IT &nbsp;</span>
        <span>2. This page is currently under construction &nbsp;</span>
        <span>3. Please check back later for updates &nbsp;</span>
        <span>4. We are working hard to bring you the best experience &nbsp;</span>
        <span>5. Stay tuned for exciting news and announcements &nbsp;</span>
        <span>6. Thank you for your patience and support &nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;