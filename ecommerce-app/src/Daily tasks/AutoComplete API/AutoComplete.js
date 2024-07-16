import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AutoComplete.css";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [fullNames, setFullNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    const autoCompleteTerm = async () => {
      if (query.length === 0) {
        setFilteredNames([]);
        return; // Return early if query is empty
      }
      try {
        const response = await axios.get(
          `https://dummyjson.com/users?limit=100&search?q=${query}`
        );
        const users = response.data.users;

        const fullnames = users.map(
          (user) => `${user.firstName} ${user.lastName}`
        );
        setFullNames(fullnames);

        const filtered = fullnames.filter((name) =>
          name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredNames(filtered);
      } catch (error) {
        console.error("Error fetching names:", error);
      }
    };
    autoCompleteTerm();
  }, [query]);

  const setName = (namez) => {
    setQuery(namez);
    setFilteredNames([]); // Clear the filtered names to hide the suggestions
  };

  return (
    <div className="autocomplete">
      <input
        className="inputDiv"
        value={query}
        placeholder="Search users..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredNames.length > 0 && (
        <div className="suggestionsdiv">
          <ul className="suggestions">
            {filteredNames.map((name, index) => (
              <li
                key={index}
                onClick={() => setName(name)}
                className="individualname"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
