import React, { useState } from "react";

const Todotasks = () => {
  const [tasks, setTasks] = useState("");
  const [priority, setPriority] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addToTasksList = () => {
    if (editing) {
      const updatedTasksList = tasksList.map((task, index) =>
        index === currentIndex
          ? { taskName: tasks, priorityName: priority }
          : task
      );
      setTasksList(updatedTasksList);
      setEditing(false);
      setCurrentIndex(null);
    } else {
      const tasksObj = {
        taskName: tasks,
        priorityName: priority,
      };
      setTasksList([...tasksList, tasksObj]);
    }
    setTasks("");
    setPriority("");
  };

  const editTask = (task, index) => {
    setTasks(task.taskName);
    setPriority(task.priorityName);
    setEditing(true);
    setCurrentIndex(index);
  };

  const deleteTask = (index) => {
    const filteredList = tasksList.filter((task, idx) => idx !== index);
    setTasksList(filteredList);
  };

  return (
    <div>
      <input
        value={tasks}
        id="addTask"
        onChange={(e) => setTasks(e.target.value)}
      />
      <select
        value={priority}
        id="priority"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">Select</option>
        <option value="High Priority">High Priority</option>
        <option value="Mid Priority">Mid Priority</option>
        <option value="Low Priority">Low Priority</option>
      </select>
      <button onClick={addToTasksList}>
        {editing ? "Update Task" : "Add Task"}
      </button>
      <div>
        {tasksList.map((task, index) => (
          <React.Fragment key={index}>
            {editing && currentIndex === index ? (
              <div>
                <input
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="High Priority">High Priority</option>
                  <option value="Mid Priority">Mid Priority</option>
                  <option value="Low Priority">Low Priority</option>
                </select>
                <button onClick={addToTasksList}>Update</button>
              </div>
            ) : (
              <div>
                <div>{task.taskName}</div>
                <div>{task.priorityName}</div>
                <button onClick={() => editTask(task, index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Todotasks;
