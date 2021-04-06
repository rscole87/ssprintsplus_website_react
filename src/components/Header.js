import React, { useRef } from "react"
import { Link } from "react-router-dom"
import MobileMenuBttn from "../images/menu-icon-BLACK.png"

function Header() {
  const navDiv = useRef()

  const toggleMobileNav = () => {
    if (navDiv.current.style.maxHeight === "0px" || (navDiv.current.style.maxHeight !== null && navDiv.current.style.maxHeight !== "220px")) {
      navDiv.current.style.maxHeight = "220px"
    } else {
      navDiv.current.style.maxHeight = "0px"
    }
  }

  return (
    <>
      <div id="mobile-menu-bttn-div">
        <Link to="/">
          <img src="" className="logo" alt="" />
        </Link>
        <button id="mobile-menu-bttn" onClick={toggleMobileNav}>
          <img src={MobileMenuBttn} alt="" />
        </button>
      </div>

      <nav id="main-nav" ref={navDiv}>
        <div className="wrapper">
          <Link to="/">
            <img src="" className="logo" alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/projects">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
