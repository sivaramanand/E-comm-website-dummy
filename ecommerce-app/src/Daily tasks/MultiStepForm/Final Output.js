import React from "react";

const ConformationScreen = ({ formData}) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
      <p>gender: {formData.gender}</p>
      <p>state: {formData.state}</p>
      <p>city: {formData.city}</p>
      <button onClick={() => alert("Form Submitted!")}>Confirm</button>
    </div>
  );
};

export default ConformationScreen;
