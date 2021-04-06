import React from "react"

function Project(props) {
  return (
    <div id={props.id} className="project">
      <img src={`../images/projects/${props.id}.png`} alt="" />
    </div>
  )
}

export default Project
