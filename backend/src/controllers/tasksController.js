export function getAllTasks(_, res) {
    res.status(200).send("You just fetched the tasks");
};

export function createTask(_, res) {
    res.status(201).send("Task created successfully");
};

export function updateTask(_, res) {
    res.status(200).json({message: "Task updated successfully"});
};

export function deleteTask(_, res) {
    res.status(200).json({message: "Task deleted successfully"});
};