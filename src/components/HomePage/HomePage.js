import { useState } from "react";
import { Header } from "../Header";
import asideImg from "../../assets/images/asideImg.png";
import searchVector from "../../assets/images/searchVector.svg";
import "./HomePage.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>To get started, log into your personal account or register</h2>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Header />
      <div className="banner">
        <div>
          <div>
            <span className="banner__main-title">Build your library</span>
          </div>
          <span className="banner__description-title">
            Over 400.000 books <br /> from fiction to the <br /> business
            literature
          </span>
          <button className="banner__button" onClick={handleOpenModal}>
            Let's start
          </button>
        </div>
        <img className="banner__picture" src={asideImg} alt="banner" />
        <div className="banner__search-block">
          <img src={searchVector} alt="searcher" />
          <input
            className="search-input"
            type="text"
            placeholder="Search by author, title, name"
          />
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};
