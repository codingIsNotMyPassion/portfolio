import React from 'react'
import "../styles/skills.css"

const Skills = () => {
  return (
    <div className='skills'>
      <ol className="list">
        <li className='item'>
          <h2>Frontend</h2>
          <span>HTML, CSS, JavaScript, React.js, Bootstrap</span>
        </li>
        <li className='item'>
          <h2>Backend</h2>
          <span>Node.js,Express.js</span>
        </li>
        <li className='item'>
          <h2>Databases</h2>
          <span>MongoDB, MySQL</span>
        </li>
        <li className='item'>
          <h2>Devops</h2>
          <span>Git, Netlify, Heroku </span>
        </li>
      </ol>
    </div>
  )
}
export default Skills