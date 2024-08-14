import React, { useState } from "react";
import Notification from "./CustomNotificaiton";
import "./Main.css";

const Main = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    setNotifications([...notifications, { id: Date.now(), type, message }]);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="App">
      <div className="notification-container">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            type={notification.type}
            message={notification.message}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
      <div className="button-container">
        <button
          onClick={() =>
            addNotification("success", "This is a success message!")
          }
        >
          Show Success
        </button>
        <button
          onClick={() => addNotification("error", "This is an error message!")}
        >
          Show Error
        </button>
        <button
          onClick={() => addNotification("info", "This is an info message!")}
        >
          Show Info
        </button>
      </div>
    </div>
  );
};

export default Main;
