// import { useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import StudentsPage from "./pages/StudentsPage"
import AddStudentPage from "./pages/AddStudentPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/add-student" element={<AddStudentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
