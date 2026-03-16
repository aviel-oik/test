import React from 'react'
import Header from "../components/Headers"

type studentType={
    name:string
    age:number
    school:string 
    average:number
}


function AddStudentPage() {

    const [newStudent, setNewStudent] = React.useState<studentType>({name: "", age: 0, school:"", average: 0})

    const addStudent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const addStudentFetch = async () => {
            const res = await fetch("http://localhost:4000/students/add",{
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify(newStudent)
            })
            const data = await res.json()
            alert(data.message)
        }
        addStudentFetch()
        setNewStudent({name: "", age: 0, school:"", average: 0})
    }

  return (
    <div className="add-student-page">
        <Header title="Add Student" />
        <form className="add-student-form" onSubmit={addStudent}>
            <input type="text" placeholder="Enter your name..." value={newStudent.name} onChange={(e) => setNewStudent({...newStudent, name: e.target.value})} />
            <input type="number" placeholder="Enter your age..." value={newStudent.age} onChange={(e) => setNewStudent({...newStudent, age: parseInt(e.target.value) || 0})} />
            <select name="school" id="school" value={newStudent.school} onChange={(e) => setNewStudent({...newStudent, school: e.target.value})}>
                <option value="">select option</option>
                <option value="lev">Lev</option>
                <option value="tal">tal</option>
            </select>
            <input type="number" placeholder="Average..." value={newStudent.average} onChange={(e) => setNewStudent({...newStudent, average: parseFloat(e.target.value) || 0})} />
            <button type="submit">Add Student</button>
        </form>
    </div>
  )
}

export default AddStudentPage