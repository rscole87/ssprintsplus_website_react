import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="footer-col">
            <h5 className="footer-heading">Contact</h5>
            <span className="footer-contact-info">S&S Prints Plus, LLC</span>
            <span className="footer-contact-info">scottshi7@gmail.com</span>
            <span className="footer-contact-info bold-weight">(727)698-5440</span>
            <span className="footer-contact-info">Sunday-Thursday 9:00am - 5:00pm</span>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Info</h5>
            <ul id="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Social</h5>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
