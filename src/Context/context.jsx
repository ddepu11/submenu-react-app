import React, { createContext, useContext } from "react";
import menu from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => (
  <AppContext.Provider value={{ menu }}>{children}</AppContext.Provider>
);

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
