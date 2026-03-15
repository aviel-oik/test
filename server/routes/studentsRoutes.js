import { Router } from "express";
import { getStudents, addStudent } from "../services/studentsServices.js";
import { stamMiddleware } from "../middleware/stamMiddleware.js";

const route = Router();

route.get("/", stamMiddleware, getStudents);
route.post("/add", stamMiddleware, addStudent);

export default route