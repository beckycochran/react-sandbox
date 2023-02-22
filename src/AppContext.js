import React, { createContext, useState, useContext, useEffect } from "react";

export const AppContext = createContext(null);

const intitialState = {
  color: '',
  number: ''
};

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(intitialState);

  return (
    <AppContext.Provider
      value={{ appState, setAppState }}
    >
      {children}
    </AppContext.Provider>
  );
};

