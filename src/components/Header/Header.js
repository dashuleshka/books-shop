import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import searchVector from "../../assets/images/searchVector.svg";
import "./Header.css";
import { SignUpModal } from "../SignUpModal";
import { LogInModal } from "../LogInModal/LogInModal";

export const Header = () => {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleOpenModalLogIn = () => {
    setIsLogInOpen(true);
  };

  const handleCloseModalLogIn = () => {
    setIsLogInOpen(false);
  };

  const handleOpenModalSignUp = () => {
    setIsSignUpOpen(true);
  };

  return (
    <header>
      <div className="header__logo-search">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__search-block">
          <img src={searchVector} alt="searcher" />
          <input
            className="search-input"
            type="text"
            placeholder="Search by author, title, name"
          />
        </div>
      </div>
      <div className="header__navigation-buttons">
        <a className="header-link" onClick={handleOpenModalLogIn} href="#">
          Log in
        </a>
        <a className="header-link" onClick={handleOpenModalSignUp} href="#">
          Sign up
        </a>
      </div>
      <LogInModal closeModal={handleCloseModalLogIn} isOpen={isLogInOpen} />
      <SignUpModal
        isModalOpen={isSignUpOpen}
        setIsModalOpen={setIsSignUpOpen}
      />
    </header>
  );
};
