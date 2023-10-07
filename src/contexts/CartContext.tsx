import React, { createContext, useState, ReactNode } from "react";

// 1. Define an interface for the context value
interface CartContextType {
  cart: any[]; // you should replace 'any' with a more specific type if you know the structure of your cart items
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]); // replace 'any' with a more specific type if applicable

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
