import React, { useState } from "react";
import axios from "axios";

const SearchApi = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState([]);

  const searchBrave = async () => {
    const url = `https://api.duckduckgo.com/`;
    try {
      const response = await axios.get(url, {
        params: {
          q: query,
          format: "json",
        },
      });
      setResults(
        response.data.RelatedTopics.map((item) => item.Text).slice(0, 5)
      );
      console.log(
        response.data.RelatedTopics.map((item) => item.Text).slice(0, 5)
      );
    } catch (error) {
      console.error("Error fetching data from DuckDuckGo API:", error);
    }
  };

  const handleSearch = (item, index) => {
    setSelected([...selected, item.slice(0, 12)]);
    const filteredResults = results.filter((_, idx) => idx !== index);
    setResults(filteredResults);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            placeholder="type to search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button onClick={searchBrave}>Search</button>
      </div>
      <div>
        {results.map((item, index) => (
          <p key={index} onClick={() => handleSearch(item, index)}>
            {item.split(" ").splice(0, 3).join(" ")}
          </p>
        ))}
      </div>
      <div
        className="selected"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginTop: "40px",
          maxWidth: "350px",
          flexWrap: "wrap",
        }}
      >
        {selected.map((item, index) => (
          <p
            key={index}
            style={{
              backgroundColor: "white",
              padding: "10px",
              margin: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            {item}{" "}
            <span
              style={{
                fontWeight: "1200",
              }}
              onClick={() => setSelected(selected.filter((i) => i !== item))}
            >
              X
            </span>
          </p>
        ))}
      </div>
    </>
  );
};

export default SearchApi;
