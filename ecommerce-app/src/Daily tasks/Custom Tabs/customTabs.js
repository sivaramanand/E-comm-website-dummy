import React, { useState } from "react";
import "./customTabs.css";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Home",
      content:
        "Embark on an epic journey to master the fundamentals of JavaScript, the language of the web. CodeQuest transforms learning into a thrilling adventure where you'll solve puzzles, complete challenges, and uncover secrets while building your coding skills.",
    },
    {
      name: "Contacts",
      content:
        "We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help.",
    },
    {
      name: "Services",
      content:
        "Dive into our interactive modules covering the basics of JavaScript, including variables, loops, functions, and more.",
    },
    {
      name: "Resources",
      content:
        "Access a wide range of tutorials that cover various aspects of JavaScript programming and refer to detailed documentation and guides for a deeper understanding of JavaScript concepts and syntax.",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="custom-tabs">
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default CustomTabs;
