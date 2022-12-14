import React, { useState, useContext } from "react";
import { act } from "react-dom/test-utils";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce ((prev, act) => prev + act.quantity * act.price, 0);
  }

  const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const clear = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ addItem, totalPrice, totalProducts, clear, isInCart, removeItem, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
