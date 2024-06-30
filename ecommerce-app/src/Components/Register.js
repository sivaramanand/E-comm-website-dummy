import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { app } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration Successful");
    } catch (err) {
      console.error(err);
      toast.error("Registration Failed");
    }
  };
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={submitLogin} className="register-form">
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <p>
          If already exists, Please <Link to="/login"> login</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
