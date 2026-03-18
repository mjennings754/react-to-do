import { Link, useNavigate } from "react-router"
import { useState } from "react";
import api from "../lib/axios";
const CreatePage = () => {
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title.trim()) {
            return;
        }

        try {
            await api.post("/tasks", {
                title
            })
            navigate("/")
        } catch (error) {
            console.log("Error creating task", error)            
        }
    }

return (
    <>
    <p>Add a new task</p>
    <Link to={"/"}>Back to tasks</Link>
    <h3>Create new task</h3>
    <form onSubmit={handleSubmit}>
        <div>
            <label><span>task</span></label>
            <input type="text"
            placeholder="task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <button type="submit">Add task</button>
    </form>
    </>
)
}
export default CreatePage;