import React from "react";

const todotasks = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <input />
      <button>Add</button>
      <div>
        {tasks.map((task, index) => (
          <div id="">{task}</div>
        ))}
      </div>
    </div>
  );
};

export default todotasks;
