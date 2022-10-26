import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RouterMain;
