import { writeFile } from "fs";
import fs from "fs/promises";

export async function getStudents(req, res){
    const file = await fs.readFile("../server/data/students.json", "utf-8");
    const students = await JSON.parse(file);
    res.status(200).json(students); // 
}

export async function addStudent(req, res){
    const {name, age, school, average} = req.body
    // validation 
    const file = await fs.readFile("../server/data/students.json", "utf-8");
    const students = await JSON.parse(file);
    students.push({name, age, school, average})
    await fs.writeFile("../server/data/students.json", JSON.stringify(students, null, 2))
    res.status(201).json({message: "student added suceffuly"})
}