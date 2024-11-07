import React from "react";
import { useOrders } from "../../../context/OrderContext";
import "./YourOrdersPage.css";

export const YourOrdersPage = () => {
  const { orders } = useOrders();

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {orders.length > 0 ? (
        orders.map((book, index) => (
          <div key={index} className="order-card">
            {book.imageLinks && (
              <img src={book.imageLinks.thumbnail} alt={book.title} />
            )}
            <h2>{book.title}</h2>
            <p>
              Authors:{" "}
              {book.authors ? book.authors.join(", ") : "Unknown author"}
            </p>
          </div>
        ))
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};
