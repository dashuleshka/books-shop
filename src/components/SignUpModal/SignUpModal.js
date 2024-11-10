import React from "react";
import "./SignUpModal.css";
import { useNavigate } from "react-router-dom";

export const SignUpModal = ({ closeModal, openModal }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value; //извлекаем значения полей формы из события
    const birthdate = e.target.birthdate.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ username, birthdate, email, password });

    navigate("/profile");
  };

  return (
    openModal && ( //условный рендеринг
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h2>Welcome to Fox Library</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="jamie"
              required
            />
            <label htmlFor="birthdate">Your birthdate:</label>
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              placeholder="04.02.2000"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jamie@gmail.com"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="abcd"
              required
            />
            <button type="submit">Sign up</button>
          </form>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    )
  );
};
