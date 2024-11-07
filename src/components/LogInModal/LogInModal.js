import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInModal.css";

export const LogInModal = ({ closeModal, isOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
    closeModal();
  };

  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal-content">
        <h2>Log In to Fox Library</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
