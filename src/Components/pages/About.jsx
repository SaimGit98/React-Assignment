import React from 'react'
import Header from '../header.jsx'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Header />
      <p>I am The Muhammad Saim !</p>
      <Link to={"/"}><p>Want to go Back</p></Link>
    </div>
  )
}

export default About
