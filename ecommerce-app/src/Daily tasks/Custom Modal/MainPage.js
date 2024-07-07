import React, { useState } from "react";
import CustomModal from "./customModal";
import "./MainPage.css";

const MainPage = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className={show ? "maindiv maindiv1" : "maindiv"}>
      <div className="card">
        <h2>Welcome to Rating</h2>
        <button onClick={openModal}>
          Rate Now...
        </button>
      </div>
      <CustomModal show={show} close={onClose} />
    </div>
  );
};

export default MainPage;
