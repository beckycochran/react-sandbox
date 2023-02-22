import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "./global-styles.css"
import { AppProvider } from "./AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
      <AppProvider>
            <App />
      </AppProvider>
);
