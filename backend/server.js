import express from "express";

const app = express()

app.get("/api/tasks", (_, res) => {
    res.send("You got 5 tasks")
});

app.post("api/tasks", (_, res) => {
    res.status(201).json({message: "Task created successfully!"})
});

app.put("api/tasks/:id", (_, res) => {
    res.status(200).json({message: "Task updated successfully!"})
});

app.delete("api/tasks/:id", (_, res) => {
    res.status(200).json({message: "Task deleted successfully!"})
});

app.listen(5001, () => {
    console.log("Server is running")
});