import Home from "./Home";
import Tada from "./Tada";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tada" element={<Tada />} />
    </Routes>
  );
};

export default App;
