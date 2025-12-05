import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 1. читаємо LocalStorage при старті
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  // 2. записуємо корзину при кожній зміні
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // додати товар
  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // видалити з корзини
  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // змінити кількість
  const updateQty = (id, qty) => {
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, qty } : item))
    );
  };

  // очистити всю корзину
  const clearCart = () => {
    setCart([]); // <<< повністю очищає масив корзини
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
