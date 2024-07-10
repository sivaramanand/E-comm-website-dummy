import React, { useState } from "react";
const Todotasks = () => {
  const [tasks, setTasks] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const addToTasksList = () => {
    setTasksList([tasksList, tasks]);
  };
  return (
    <div>
      <input id="addTask" onChange={(e) => setTasks(e.target.value)} />
      <select id="priority">
        <option id="high">High Priority</option>
        <option id="mid">Mid Priority</option>
        <option id="low">Low Priority</option>
      </select>
      <button onClick={() => addToTasksList}>Add</button>
      <div>
        {tasks.map((task, index) => (
          <div id="">{task}</div>
        ))}
      </div>
    </div>
  );
};

export default Todotasks;
