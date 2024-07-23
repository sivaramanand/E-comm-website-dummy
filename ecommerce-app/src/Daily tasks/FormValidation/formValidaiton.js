import React, { useState } from "react";
import "./formValidation.css";

const FormValidation = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate the field on change
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email address is invalid";
        }
        break;
      case "username":
        if (!value.trim()) {
          error = "Username is required";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const validate = () => {
    let formErrors = {};
    for (let field in values) {
      const error = validateField(field, values[field]);
      if (error) {
        formErrors[field] = error;
      }
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    setIsSubmitted(true);
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", values);
      alert("Form submitted successfully");
      setValues({
        name: "",
        email: "",
        username: "",
        password: "",
      });
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Username"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
