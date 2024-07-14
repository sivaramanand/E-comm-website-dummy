import React, { useState,useEffect } from "react";

const Page3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setState(formData.state || "");
    setCity(formData.city || "");
  }, [formData]);
  const handleStateChange = (e) => {
    setState(e.target.value);
    setFormData({ ...formData, state: e.target.value });
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setFormData({ ...formData, city: e.target.value });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h5>Step 3</h5>
      <input placeholder="state" value={state} onChange={handleStateChange} />
      <input placeholder="city" value={city} onChange={handleCityChange} />
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Prev</button>
    </div>
  );
};

export default Page3;
