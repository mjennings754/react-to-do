import Task from "../models/Task.js"

export async function getAllTasks(_, res) {
    try {
        const tasks = await Task.find().sort({createdAt:1});
        res.status(200).json(tasks)
    } catch (error) {
        console.error("Error in all getAllTasks controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function getTaskById(req, res) {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(404).json({message: "Task not found!"})
            res.json(task)
    } catch (error) {
        console.error("Error in getTaskById controller", error)
        res.status(500).json({message: error.message})
    }
}

export async function createTask(_, res) {
    try {
        const {title} = _.body
        const task = new Task({title:title})

        const savedTask = await task.save()
        res.status(201).json(savedTask);
        console.log(title)
    } catch (error) {
        console.error("Error in createTask controller", error)
        res.status(500).json({message: "Internal server error"})
    }
};

export async function updateTask(_, res) {
    try {
        const {title} = _.body
        const updatedTask = await Task.findByIdAndUpdate(_.params.id, {title}, {new: true});
        if(!updatedTask) return res.status(404).json({message: "Task not found"})
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error in updateTask controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function deleteTask(_, res) {
    try {
        const deletedTask = await Task.findByIdAndDelete(_.params.id)
        if(!deletedTask) return res.status(404).json({message: "Task not found"});
        res.status(200).json({message: "Task deleted successfully!"})
    } catch (error) {
        console.error("Error in deleteTask controller", error)
        res.status(500).json({message: "Internal server error"})
    }
};