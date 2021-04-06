import React from "react"
import { Link } from "react-router-dom"

function About() {
  return (
    <>
      <div className="wrapper">
        <h1 className="page-heading">About S&S Prints-Plus, LLC</h1>
      </div>

      <div id="about-us-div" className="wrapper">
        <div id="headshot-div" className="twoCol"></div>

        <div className="twoCol">
          <p className="body-copy">I am Shirley A. Scott, sole proprietor of S&S Prints-Plus, LLC, established September, 2020. At S&S Prints-Plus, LLC, you will find a selection of custom services for individuals and businesses. My small, but efficient, company can help you produce and display pertinent custom designs on apparel, signs, mugs, and more. </p>
          <p className="body-copy">
            S&S Prints-Plus was birthed from a grateful volunteer opportunity at a T-shirt shop called <a href="https://www.facebook.com/pg/backinunionsprings/about/?ref=page_internal">Back-in-Union Springs</a> in Alabama.
          </p>
          <p className="body-copy">During the first year of my retirement from education, the owner, Sylvia Gwen Franklin (a retired teacher), took me under her wings and exposed me to the craft of custom designing shirts and other apparel. She introduced me to other services like embroidery and printing on caps, as well as organizing and constructing floor-sets to display merchandise.</p>
          <p className="body-copy">I volunteered at the shop for nearly a year. While with the company, I learned skills that awakened the artist within me. Voila! Before too long, a business idea was embarked upon through an idea and developed into a small business.</p>
        </div>
      </div>
    </>
  )
}

export default About
