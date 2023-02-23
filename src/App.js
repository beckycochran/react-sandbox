import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Header from "./Header"
import { useContext } from "react";
import { AppContext } from "./AppContext";
const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  );
};

export default App;
