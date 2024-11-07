import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserProfile1 } from "../pages/UserProfile1";
import { HomePage } from "../HomePage/HomePage";
import { BookDetailsPage } from "../pages/BookDetailsPage/BookDetailsPage.js";
import { YourOrdersPage } from "../pages/YourOrdersPage/YourOrdersPage.js";
import { OrderProvider } from "../../context/OrderContext.js";
import "./App.css";

export const App = () => {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile1 />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/your-orders" element={<YourOrdersPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
};