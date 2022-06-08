import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to="home">Home</Link>
                <Link to="skills">Skills</Link>
                <Link to="projects">Projects</Link>
            </div>
        </div>
    )
}
export default Navbar