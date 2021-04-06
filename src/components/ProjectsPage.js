import React, { useState } from "react"
import projectList from "./projectList"
import Project from "./Project"

function ProjectsPage() {
  const [displayedProjects, setDisplayedProjects] = useState(projectList)

  const filterProjects = (e) => {
    let projectType = e.target.value

    if (projectType === "all") {
      setDisplayedProjects(projectList)
    } else {
      setDisplayedProjects(projectList.filter((project) => project.type === projectType))
    }
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="page-heading">Products</h1>
      </div>

      <div className="wrapper">
        <select name="project-filter" id="project-filter" onChange={filterProjects}>
          <option value="all" defaultValue>
            All
          </option>
          <option value="branding">Branding</option>
          <option value="web-design">Web Design</option>
          <option value="spacial">Spacial Design</option>
        </select>
      </div>

      <div id="projects-div">
        {displayedProjects.map((project) => (
          <Project id={project.id} key={project.key} image={project.image} />
        ))}
      </div>
    </>
  )
}

export default ProjectsPage
