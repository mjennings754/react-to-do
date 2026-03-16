import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js"
const app = express()

app.use("/api/tasks", tasksRoutes)

app.listen(5001, () => {
    console.log("Server is running")
});