import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOrders } from "../../../context/OrderContext";
import "./BookDetailsPage.css";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const stripHtmlTags = (html) => {
  return html.replace(/<[^>]+>/g, "");
};

export const BookDetailsPage = () => {
  const { id } = useParams(); // получение id книги из url
  const [bookDetails, setBookDetails] = useState(null); // данные о книге
  const { addOrder } = useOrders(); // позволяет добавлять книгу в заказы

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
        );
        const data = await response.json();
        setBookDetails(data.volumeInfo);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  // проверка состояния загрузки
  if (!bookDetails) {
    return <p>Loading...</p>;
  }

  const handleOrder = () => {
    addOrder(bookDetails);
  };

  return (
    <div className="book-container">
      {bookDetails.imageLinks && (
        <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
      )}
      <div>
        <h1>{bookDetails.title}</h1>
        <p>
          Authors:{" "}
          {bookDetails.authors
            ? bookDetails.authors.join(", ")
            : "Unknown author"}
        </p>
        <p>
          Description:{" "}
          {bookDetails.description
            ? stripHtmlTags(bookDetails.description)
            : "No description available."}
        </p>
        <p className="rating">
          Rating: {bookDetails.averageRating || "No rating available"}
        </p>
        <button onClick={handleOrder}>Order</button>
      </div>
    </div>
  );
};
