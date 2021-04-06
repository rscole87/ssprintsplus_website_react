import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../src/styles/style.css"
import Header from "../src/components/Header"
import ContactArea from "../src/components/ContactArea"
import Footer from "../src/components/Footer"
import LandingPage from "../src/components/LandingPage"
import About from "../src/components/About"
import ProjectsPage from "./components/ProjectsPage"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/about-us">
          <About />
        </Route>

        <Route path="/projects">
          <ProjectsPage />
        </Route>
      </Switch>

      <ContactArea />
      <Footer />
    </BrowserRouter>
  )
}

export default Main
