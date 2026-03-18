import { useEffect } from "react"
import { useState } from "react"
import api from "../lib/axios";
import { Link } from "react-router";
const HomePage = () => {
console.log("HomePage rendered")
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await api.get("/tasks")
                console.log(res.data)
                setTasks(res.data)
            } catch (error) {
                console.log("error fetching tasks")
                console.log(error)
            }
        }
        fetchTasks();
    }, [])
    return (
        <>
        <p>Hotlist</p>
        <Link to={"/new"}>Add task</Link>
        <div>
            {tasks.map(task => {
                return <p key={task._id}>{task.title} [{task.createdAt}]</p>
            })}
        </div>
        </>
    )
}
export default HomePage;