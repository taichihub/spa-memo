import React, { useState, createContext } from "react";

export const sessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState("logout");

  const login = () => setSession("login");
  const logout = () => setSession("logout");

  return (
    <sessionContext.Provider value={{ session, login, logout }}>
      {children}
    </sessionContext.Provider>
  );
};

export default SessionProvider;
