import express from "express";
import cors from "cors";
import studentsRoute from "./routes/studentsRoutes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    res.status(200).json({message: "ok"})
});
app.use("/students", studentsRoute);

app.listen(4000, () => {
    console.log("running...")
});