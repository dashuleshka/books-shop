import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    // Инициализация из localStorage
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    // Сохранение в localStorage
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (book) => {
    setOrders((prevOrders) => [...prevOrders, book]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
