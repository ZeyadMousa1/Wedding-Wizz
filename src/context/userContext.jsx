import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext();

export function UserContextProvider({ children }) {
  const [isLogin, setLogin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <userContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </userContext.Provider>
  );
}
