import { Route, Routes } from "react-router-dom";
import Anagram from "../pages/Anagram";
import { Home } from "../pages/home";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anagram" element={<Anagram />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RouterMain;
