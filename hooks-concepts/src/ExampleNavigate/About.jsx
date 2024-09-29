import React from 'react'
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ color: "green" }}>
                This is the about us page
            </h1>
            <button onClick={() => navigate(-1)}>
                Go Back Home
            </button>
    </div>
  )
}

export default About
