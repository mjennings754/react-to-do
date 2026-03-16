import express from "express";

const app = express()

app.get("/api/tasks", (_, res) => {
    res.send("You got 5 tasks")
})

app.listen(5001, () => {
    console.log("Server is running")
})