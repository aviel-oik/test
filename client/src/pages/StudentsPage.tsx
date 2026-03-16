import React from 'react'
import Header from "../components/Headers"

type studentType={
    name:String
    age:number
    school:String 
    average:number
}

function StudentsPage() {

    const [students, setStudents] = React.useState<studentType[]>([])

    React.useEffect(() => {
        const studentFetch = async () => {
            const response = await fetch("http://localhost:4000/students")
            const students: studentType[] = await response.json()
            setStudents(students)
        }
        studentFetch()
    },[])

  return (
    <div className="students-page">
        <Header title="Students List"/>
        <div className='students-table'>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SCHOOL</th>
                        <th>AVERAGE</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.school}</td>
                            <td>{student.average}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StudentsPage