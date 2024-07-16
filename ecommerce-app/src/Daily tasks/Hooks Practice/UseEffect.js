import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      let users = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(users.data);
      setData(users.data);
    };

    getUsers();
  }, [toggle]);

  const handleNextUser = () => {
    if (count < data.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0); // Reset to the first user if it exceeds the length
    }
  };

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Get Details</button>
      <button onClick={handleNextUser}>Next User</button>
      <p>{data.length > 0 && data[count].name}</p>
    </div>
  );
};

export default UseEffect;
