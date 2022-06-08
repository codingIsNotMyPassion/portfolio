import React from 'react'
import data from "../components/data"
import "../styles/projects.css"
import "../app.css"

const Projects = () => {
  return (
    <div className='projects'>
      {
        data.map((project) => {
          return(
            <div className='projectCard'>
              <h1>{project.name}</h1>
              <p>{project.topics}</p>
              <div className='links'>
              <a href={project.github}>Github</a>
              <a href={project.netlify}>Netlify</a>
              </div>
            </div>
          )
          }
        )
      }
    </div>
  )
}

export default Projects