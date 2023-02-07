import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const ShippingContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [shippingState, setShippingState] = useState({});

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <ShippingContext.Provider value={[shippingState, setShippingState]}>
        {props.children}
      </ShippingContext.Provider>
    </CartContext.Provider>
  );
};
