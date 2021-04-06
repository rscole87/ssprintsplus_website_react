import React from "react"
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <>
      <section id="intro-section">
        <div className="wrapper">
          <h1 id="intro-text">
            <span className="bold-weight">S</span>&<span className="bold-weight">S Prints-Plus</span>
          </h1>
        </div>
      </section>

      <section id="about-section">
        <div className="wrapper">
          <div className="twoCol">
            <p className="body-copy">S&S Prints-Plus, LLC serves local customers in St. Petersburg, Florida and bordering states with personal deliveries as well as shipment through the United States Postal Service.</p>
            <br></br>
            <p className="body-copy"> My small company is committed to providing and delivering quality products to customers. If you are in searching for designs to customize apparel and build simple signs, for your start-up business on a budget, then S&S Prints-Plus, LLC is the best cost-effective choice for many of your graphic display needs!</p>
            <br></br>
            <p className="body-copy">Find the simple design solution you’ve been looking for with S&S Prints-Plus, LLC.</p>
            <span className="accent-text">Simple shirts, and other products, can say a lot!</span>
          </div>

          <div className="twoCol">
            <h3>Print and press with S&S today!</h3>
            <Link to="/about-us">
              <button>About Us ></button>
            </Link>
          </div>
        </div>
      </section>

      <section id="featured-products-section">
        <div className="wrapper">
          <div className="heading-div">
            <h3 className="heading-medium">Featured Products</h3>
            <Link to="./projects">
              <button>See all products ></button>
            </Link>
          </div>
        </div>

        <div id="featured-products-div">
          <div id="product-thumb1" className="product-thumb"></div>
          <div id="product-thumb2" className="product-thumb"></div>
          <div id="product-thumb3" className="product-thumb"></div>
          <div id="product-thumb4" className="product-thumb"></div>
          <div id="product-thumb5" className="product-thumb"></div>
          <div id="product-thumb6" className="product-thumb"></div>
        </div>
      </section>

      <section id="capabilities-section">
        <div className="wrapper">
          <div className="heading-div">
            <h3 className="heading-medium">Services Offered</h3>
          </div>

          <div id="capabilities-div">
            <div className="capability-item">
              <h3 className="capability-heading">T-Shirt Press</h3>
            </div>

            <div className="capability-item center-item">
              <h3 className="capability-heading">Transfers & Vinyl</h3>
            </div>

            <div className="capability-item">
              <h3 className="capability-heading">Simple Signs & Designs</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
