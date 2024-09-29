import React from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      
        <h1 style={{ color: "green" }}>
            Welcome
        </h1>
        <button onClick={() => navigate("/about")}>
            About
        </button>
   

    </div>
  )
}

export default Home
