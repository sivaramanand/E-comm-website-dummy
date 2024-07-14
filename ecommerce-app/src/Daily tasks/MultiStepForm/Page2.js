import React, { useState,useEffect } from "react";

const Page2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    setAge(formData.age || "");
    setGender(formData.gender || "");
  }, [formData]);
  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setFormData({ ...formData, age: e.target.value });
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setFormData({ ...formData, gender: e.target.value });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h5>Step 2</h5>{" "}
      <input placeholder="age" value={age} onChange={handleAgeChange} />
      <input
        placeholder="gender"
        value={gender}
        onChange={handleGenderChange}
      />
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Prev</button>
    </div>
  );
};

export default Page2;
