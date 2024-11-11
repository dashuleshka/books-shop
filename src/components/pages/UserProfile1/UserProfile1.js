import React, { useState } from "react";
import "./UserProfile1.css";
import logo from "../../../assets/images/logo.svg";
import searchVector from "../../../assets/images/searchVector.svg";
import instagramImg from "../../../assets/images/instagramLogo.svg";
import facebookImg from "../../../assets/images/facebookLogo.svg";
import { useNavigate } from "react-router-dom";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const UserProfile1 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("intitle");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${encodeURIComponent(
          searchQuery
        )}&key=${apiKey}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="user-account__wrap">
          <header>
            <div className="account__logo-search">
              <div className="account__logo">
                <img src={logo} alt="logo" />
              </div>
              <form
                className="account__search-block"
                onSubmit={handleSearchSubmit}
              >
                <img src={searchVector} alt="searcher" />
                <select
                  className="search-filter"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="intitle">Name</option>
                  <option value="inauthor">Author</option>
                  <option value="subject">Subject</option>
                </select>
                <input
                  className="account__search-input"
                  type="text"
                  placeholder="Search by author, title, subject"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </div>
            <div className="account__navigation-buttons">
              <a
                className="account-link"
                href="#"
                onClick={() => {
                  navigate("/login");
                }}
              >
                All books
              </a>
              <a
                className="account-link"
                href="#"
                onClick={() => {
                  navigate("/your-orders");
                }}
              >
                Your orders
              </a>
            </div>
          </header>
          <div className="search-results">
            {books.length > 0 ? (
              books.map((item) => {
                const title = item.volumeInfo.title;
                const authors = item.volumeInfo.authors
                  ? item.volumeInfo.authors.join(", ")
                  : "Unknown author";
                const imageUrl = item.volumeInfo.imageLinks?.thumbnail;

                return (
                  <div
                    key={item.id}
                    className="book-card"
                    onClick={() => navigate(`/book/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {imageUrl && (
                      <img className="book-image" src={imageUrl} alt={title} />
                    )}
                    <h2 className="book-title">{title}</h2>
                    <p className="book-authors">Authors: {authors}</p>
                  </div>
                );
              })
            ) : (
              <p>No books found.</p>
            )}
          </div>
        </div>
      </div>
      <footer className={`footer ${books.length === 0 ? "fixed" : ""}`}>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Fox Library</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Privacy&Security</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>My account</h3>
            <ul>
              <li>
                <a href="#">Edit profile</a>
              </li>
              <li>
                <a href="#">My orders</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Stay connected</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <img src={instagramImg} alt="Instagram" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={facebookImg} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
