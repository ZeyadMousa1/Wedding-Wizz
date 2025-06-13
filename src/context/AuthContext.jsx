import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  // Keep localStorage and state in sync
  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("userName");
    }
  }, [userName, email]);

  useEffect(() => {
  const storedName = localStorage.getItem("userName");
  if (storedName) setUserName(storedName);
}, []);


  return (
    <AuthContext.Provider value={{ userName, setUserName, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
