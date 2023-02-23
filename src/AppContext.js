import React, { createContext, useState} from "react";

export const AppContext = createContext(null);

const intitialState = {
//
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

