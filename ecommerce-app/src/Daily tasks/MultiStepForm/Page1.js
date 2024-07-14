import React, { useState, useEffect } from "react";

const Page1 = ({ formData, setFormData, nextStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setName(formData.name || "");
    setEmail(formData.email || "");
  }, [formData]);
  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h5>Step 1</h5>
      <input placeholder="name" value={name} onChange={handleNameChange} />
      <input placeholder="email" value={email} onChange={handleEmailChange} />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Page1;
