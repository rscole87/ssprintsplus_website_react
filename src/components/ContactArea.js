import React from "react"

function ContactArea() {
  return (
    <>
      <section id="contact-section">
        <div className="wrapper">
          <div className="heading-div">
            <h3 className="heading-medium">Contact</h3>
          </div>

          <p className="body-copy">S&S Prints-Plus is a home-grown business.</p>
          <p className="body-copy">Fill out the contact form included to receive specific information about offered products and services through S&S Print-Plus, LLC.</p>

          <div id="form-div">
            <form id="contact-form">
              <input name="f_name" type="text" placeholder="First Name*" />
              <input name="l_name" type="text" placeholder="Last Name*" />
              <input name="phone" type="text" placeholder="Phone Number*" />
              <input name="email" type="text" placeholder="Email*" />
              <textarea name="message" cols="75" rows="3" placeholder="Please tell us how we can best assist you."></textarea>
              <div id="submit-bttn-div">
                <input id="submit" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactArea
