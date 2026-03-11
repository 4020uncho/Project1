import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './contact.css'

const Contact = () => {
  return (
  
   <div className="container">
      <h1>Contact Us</h1>

      <form>
        <div className="form-group">
          <label>Full Name <span className="required">*</span></label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Email Address <span className="required">*</span></label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phone" />
        </div>

        <div className="form-group">
          <label>Subject <span className="required">*</span></label>
          <input type="text" name="subject" required />
        </div>

        <div className="form-group">
          <label>Message <span className="required">*</span></label>
          <textarea name="message" required></textarea>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Contact