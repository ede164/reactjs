import React, { useContext, useEffect } from "react";
import "../../App.css";
import { CartContext } from "../../CartContext";

function PlaceOrder() {
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="placeOrder-container">
      <h2 className="thankyou">Gracias por tu orden</h2>
      <p>
        El numero de tu orden es <strong>#2001539</strong>. Te hemos enviado la confirmacion de tu orden a tu email
        
      </p>
      <br />
    </div>
  );
}

export default PlaceOrder;
