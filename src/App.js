import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import StartScene from "./SplineScene";
import Home from "./pages/Home";
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  const location = useLocation();
  const showCustomCursor = location.pathname !== "/";

  return (
    <>
      {showCustomCursor && <CustomCursor />}
      <Routes>
        <Route path="/" element={<StartScene />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;