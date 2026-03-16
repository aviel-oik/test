// import React from 'react'
import Header from "../components/Headers"
import { useNavigate } from "react-router-dom"

function HomePage() {

    const navigate = useNavigate()

  return (
    <div className="home-page">
        <Header title="Home" />
        <div className="home-page-navigation">
            <button onClick={() => navigate("/students")}>Students List</button>
            <button onClick={() => navigate("/add-student")}>Add Student</button>
        </div>
    </div>
  )
}

export default HomePage