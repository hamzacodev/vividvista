// ThemeContext.js
"use client";

import React, { ReactNode, createContext, useState } from "react";

// Create a context with a default value
interface ThemeContextValue {
  Products: any[]; // Adjust the type as needed
  changeProducts: (value: any) => void;
}

const Context = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// Create a provider component
const ContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [Products, setProducts] = useState<any[]>([]); // Adjust the type as needed
  const [cart, setcart] = useState<any[]>([]); // Adjust the type as needed

  const changeProducts = (value: any) => {
    setProducts(value);
  };

  const contextValue: ThemeContextValue = {
    Products,
    changeProducts,
    cart, setcart
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
